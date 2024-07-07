import React, { useState, useEffect } from 'react';
import GitHubService from '../Service/GithubService';

const FollowersCount = ({ username }) => {
  const [followersCount, setFollowersCount] = useState(0);

  useEffect(() => {
    const fetchFollowersCount = async () => {
      try {
        const count = await GitHubService.getUserFollowers(username);
        setFollowersCount(count);
      } catch (error) {
        console.error('Error fetching followers count:', error);
      }
    };

    fetchFollowersCount();
  }, [username]);

  return (
    <div className="text-center text-sm py-4 ">
    <h5 className="font-semibold mb-2">Followers</h5>
    <div className="text-center">
      <p className="font-bold text-blue-400">{followersCount}</p>
    </div>
  </div>
  );
};

export default FollowersCount;
