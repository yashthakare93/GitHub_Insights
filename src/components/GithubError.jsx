// GitHubError.js

import React from 'react';

const GitHubError = ({ error }) => {
  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default GitHubError;
