import React, { useState, useEffect } from 'react';
import GitHubService from '../Service/GithubService';
import GitHubInput from './GithubInput'; // Adjust path as per your project structure
import GitHubError from './GithubError'; // Adjust path as per your project structure
import Navigation from '../Navigation/Navigation';


const GitHubData = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]); // Initialize repos state
  const [commits, setCommits] = useState([]); // Initialize commits state
  const [issues, setIssues] = useState([]); // Initialize issues state
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchGitHubData = async (username) => {
    setLoading(true);
    try {
      const userData = await GitHubService.getUserData(username);
      const userRepos = await GitHubService.getUserRepos(username);

      setUserData(userData);
      setRepos(userRepos);

      const commitsPromises = userRepos.map(async (repo) => {
        const repoCommits = await GitHubService.getRepoCommits(username, repo.name);
        return repoCommits;
      });
      const commitsData = await Promise.all(commitsPromises);
      setCommits(commitsData.flat());

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
    <>
   
      <GitHubError error={error} />
      <GitHubInput
        username={username}
        setUsername={setUsername}
        fetchGitHubData={fetchGitHubData}
        disabled={loading}
      />

    </>
  );
};

export default GitHubData;
