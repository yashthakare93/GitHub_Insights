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
    <div className="p-4 text-center"> 
      <h5 className="text-sm font-semibold mb-2">Repo count</h5>
      <p className="text-sm font-bold text-yellow-400">{repoCount}</p>
    </div>
  );
};

export default RepoCount;
