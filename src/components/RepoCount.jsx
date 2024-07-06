import React, { useState, useEffect } from 'react';
import GitHubService from '../Service/GithubService';

const RepoCount = ({ username }) => {
  const [repoCount, setRepoCount] = useState(0);

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const count = await GitHubService.getUserRepoCount(username);
        setRepoCount(count);
      } catch (error) {
        console.error('Error fetching repository count:', error);
      }
    };

    fetchRepoCount();
  }, [username]);

  return (
    <div>
      <h5>Repository Count</h5>
      <p>{repoCount}</p>
    </div>
  );
};

export default RepoCount;
