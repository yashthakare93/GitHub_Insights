import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 h-full flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Navigation</h2>
        <ul className="space-y-2">
          <li>
            <a href="#user-info" className="block hover:text-blue-500 transition duration-300">
              User Info
            </a>
          </li>
          <li>
            <a href="#profile-trophy" className="block hover:text-blue-500 transition duration-300">
              Profile Trophy
            </a>
          </li>
          <li>
            <a href="#streak-stats" className="block hover:text-blue-500 transition duration-300">
              Streak Stats
            </a>
          </li>
          <li>
            <a href="#following-list" className="block hover:text-blue-500 transition duration-300">
              Following List
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Links</h2>
        <ul className="space-y-2">
          <li>
            <a href="/" className="block hover:text-blue-500 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="block hover:text-blue-500 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="block hover:text-blue-500 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
