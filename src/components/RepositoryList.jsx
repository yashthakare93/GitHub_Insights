import React from 'react';

const RepositoryList = ({ repos }) => {
  const repositories = Array.isArray(repos) ? repos : [];

  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="p-4 bg-white shadow-md rounded-md w-full lg:max-w-2xl ">
      <h3>Repositories</h3>
      <ul>
        {repositories.length > 0 ? (
          repositories.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))
        ) : (
          <li>No repositories found</li>
        )}
      </ul>
    </div>
    </div>
  );
};

export default RepositoryList;
