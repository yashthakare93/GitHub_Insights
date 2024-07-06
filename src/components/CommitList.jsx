import React from 'react';

const CommitList = ({ commits }) => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="p-4 bg-white shadow-md rounded-md w-full lg:max-w-2xl ">
    <h3>Commits</h3>
    <ul>
      {commits && commits.map((commit) => (  // Add a check for commits
        <li key={commit.sha}>{commit.commit.message}</li>
      ))}
    </ul>
    </div>
  </div>
);

export default CommitList;
