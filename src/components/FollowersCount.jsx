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
    <div>
      <h5>Followers Count</h5>
      <p>{followersCount}</p>
    </div>
  );
};

export default FollowersCount;
