import React from 'react';

const GithubStreakStats = ({ username }) => {
  return (
    <div className=" rounded-lg ">
      <img
        src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}`}
        alt="GitHub Streak Stats"
        className="w-full"
      />
    </div>
  );
};

export default GithubStreakStats;
