import React, { useState, useEffect } from 'react';
import GitHubService from '../Service/GithubService';

const FollowingCount = ({ username }) => {
  const [followingCount, setFollowingCount] = useState(0);

  useEffect(() => {
    const fetchFollowersCount = async () => {
      try {
        const count = await GitHubService.getUserFollowing(username);
        setFollowingCount(count);
      } catch (error) {
        console.error('Error fetching following count:', error);
      }
    };

    fetchFollowersCount();
  }, [username]);

  return (
    <div className="py-4 text-center text-sm ">
    <h5 className="font-semibold mb-2">Following</h5>
    <div className="text-center">
      <p className="font-bold text-blue-400">{followingCount}</p>
    </div>
  </div>
  );
};

export default FollowingCount;
