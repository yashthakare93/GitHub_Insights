import React, { useState, useEffect } from 'react';
import GitHubService from '../Service/GithubService';
import RepoCount from './RepoCount';
import FollowersCount from './FollowersCount';
import FollowingCount from './FollowingCount';
import MostUsedLanguage from './MostUsedLanguage';

const GitHubStats = ({ username }) => {
  const [repoCount, setRepoCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch repository count
        const repoCount = await GitHubService.getUserRepoCount(username);
        setRepoCount(repoCount);

        // Fetch followers count
        const followersCount = await GitHubService.getUserFollowers(username);
        setFollowersCount(followersCount);

        // Fetch following count
        const followingCount = await GitHubService.getUserFollowing(username);
        setFollowingCount(followingCount);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };

    fetchGitHubStats();
  }, [username]);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between shadow-lg bg-white p-4 lg:p-6">
      {/* Repository Count */}
      <div className="mb-4 lg:mb-0 lg:w-1/4">
        <RepoCount username={username} count={repoCount} />
      </div>

      {/* Followers Count */}
      <div className="mb-4 lg:mb-0 lg:w-1/4">
        <FollowersCount username={username} count={followersCount} />
      </div>

      {/* Following Count */}
      <div className="mb-4 lg:mb-0 lg:w-1/4">
        <FollowingCount username={username} count={followingCount} />
      </div>

      {/* Most Used Language */}
      <div className="lg:w-1/4">
        <MostUsedLanguage username={username} />
      </div>
    </div>
  );
};

export default GitHubStats;
