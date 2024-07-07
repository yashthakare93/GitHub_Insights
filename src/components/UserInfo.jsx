import React from 'react';

const UserInfo = ({ userData, username }) => (
  <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
    <div className="flex flex-col items-center pb-10 pt-10">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-row items-center gap-8">
          <div>
            {userData.avatar_url && (
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={userData.avatar_url}
                alt={`${userData.name}'s avatar`}
              />
            )}
            {userData.login && (
              <span className="text-sm font-bold text-slate-600">@{userData.login}</span>
            )}
          </div>
          <div>
            {userData.name && (
              <h5 className="mb-1 text-xl font-semibold text-gray-900 font-serif dark:text-white">
                {userData.name}
              </h5>
            )}
            {userData.location && (
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Location: {userData.location}
              </p>
            )}
            {userData.company && (
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Company: {userData.company}
              </p>
            )}
           
          </div>
        </div>
       
      </div>
      {userData.bio && (
        <p className="text-sm text-gray-700 dark:text-gray-400 mt-2 text-center px-3">
          {userData.bio}
        </p>
      )}
      <div className="flex mt-4">
        {userData.blog && (
          <a
            href={userData.blog}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Blog
          </a>
        )}
        {userData.html_url && (
          <a
            href={userData.html_url}
            className="ml-2 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            GitHub
          </a>
        )}
      </div>
    </div>

  </div>
);

export default UserInfo;
