import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

const GitHubInput = ({ username, setUsername, fetchGitHubData, disabled }) => {
  const navigate = useNavigate(); // useNavigate hook

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGitHubData(username);
    navigate(`/insights/${username}`); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      {/* Badge at top right */}
      <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">In Progress</span>

      <div className="p-4 text-center w-full lg:px-60">
        <h2 className="lg:text-9xl text-6xl font-serif font-bold mb-4">GitHub Insights</h2>
        <p className='mb-4'>Dive into your GitHub journey with Github Insights. We fetches and analyzes GitHub user data using the GitHub API, providing detailed insights into user activities and contributions.
        </p>
        <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-4">
          <div className="relative w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              value={username}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="GitHub Username"
              required
              disabled={disabled}
            />
          </div>
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            disabled={disabled}
          >
            <span className="relative lg:px-4 px-2 lg:py-2 py-1 lf transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Discover Insights
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default GitHubInput;
