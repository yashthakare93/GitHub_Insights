import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GitHubService from '../Service/GithubService';
import UserInfo from './UserInfo';
import GitHubError from './GithubError';
import ProfileTrophy from './ProfileTrophy';
import GithubStreakStats from './GithubStreakStats';
import FollowingList from './FollowingList';
import GitHubStats from './GithubStats'; // Corrected import name
import FollowerList from './FollowerList';

const MainContent = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [issues, setIssues] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchGitHubData(username);
  }, [username]);

  const fetchGitHubData = async (username) => {
    setLoading(true);
    try {
      const userData = await GitHubService.getUserData(username);
      const userRepos = await GitHubService.getUserRepos(username);

      setUserData(userData);
      setRepos(userRepos);

      const issuesPromises = userRepos.map(async (repo) => {
        const repoIssues = await GitHubService.getRepoIssues(username, repo.name);
        return repoIssues;
      });
      const issuesData = await Promise.all(issuesPromises);
      setIssues(issuesData.flat());

      setError('');
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      setError('Error fetching GitHub data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-custom-bg p-4 overflow-auto">
      <GitHubError error={error} />

      {loading && (
        <div className="flex h-full">
          <svg className="animate-spin h-5 w-5 mr-3 text-gray-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014.108 7.108L2.694 8.522A9.503 9.503 0 002 12h4v5.291zm11.196-9.98A9.503 9.503 0 0020 12h-4v-5.291a8.001 8.001 0 01-3.892 10.783l1.414 1.414A10.472 10.472 0 0020 12h-4v-1.477z"
            ></path>
          </svg>
          <span>Loading...</span>
        </div>
      )}

      {!loading && userData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {/* Left Column: UserInfo */}
          <div id="user-info">
            <UserInfo userData={userData} username={username} />
          </div>

          {/* Right Column: Profile Trophy */}
          <div id="profile-trophy">
            <ProfileTrophy username={username} />
          </div>

          <div className='flex justify-center items-center' >
          <GithubStreakStats username={username} />
          </div>

          <div className='' >
          <GitHubStats username={username} />
          </div>

          <div >
          
          <FollowingList username={username} />
          </div>

          <div >
          
          <FollowerList username={username} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
