import React, { useEffect, useState } from 'react';

const FollowerList = ({ username }) => {
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/followers`);
        if (!response.ok) {
          throw new Error('Failed to fetch following list');
        }
        const data = await response.json();
        setFollowerList(data);
      } catch (error) {
        console.error('Error fetching follower list:', error);
      }
    };

    fetchFollowing();
  }, [username]); // Ensure useEffect re-runs if username changes

  return (
    <div className=' px-4'>
      <h2>Follower List</h2>
      <ul className="divide-y divide-gray-200">
        {followerList.map((person) => (
          <li key={person.email} className="flex flex-col gap-6 py-5">
            <div className="flex justify-between gap-x-6">
              <div className="flex min-w-0 gap-x-4">
                <img
                  alt=""
                  src={person.avatar_url}
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{person.login}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.html_url}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowerList;
