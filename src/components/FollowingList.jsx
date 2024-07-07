import React, { useEffect, useState } from 'react';

const FollowingList = ({username}) => {
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/following`);
        if (!response.ok) {
          throw new Error('Failed to fetch following list');
        }
        const data = await response.json();
        setFollowingList(data);
      } catch (error) {
        console.error('Error fetching following list:', error);
      }
    };

    fetchFollowing();
  }, []);

  return (
    <div>
      <h2>Following List</h2>
      <ul>
        {followingList.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowingList;
