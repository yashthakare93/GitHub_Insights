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
    <div className="bg-white shadow-md rounded-lg p-4 ">
      <h5 className="text-lg font-semibold mb-2 ">Repository Count</h5>
      <div className="text-center">
        <p className="text-xl font-bold text-red-500">{repoCount}</p>
      </div>
    </div>
  );
};

export default RepoCount;
