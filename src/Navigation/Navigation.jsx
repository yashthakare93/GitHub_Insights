// src/Navigation/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10 px-4">
      <div className="max-w-7xl mx-auto sm:px-6 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-black">
              GitHub Insights
            </Link>
          
          </div>
          <div className="flex items-center">
            <Menu>
              {({ open }) => (
                <>
                  <div className="flex items-center">
                    <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Menu.Button>
                  </div>
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={`block px-4 py-2 text-sm text-black ${active ? 'bg-gray-100' : ''}`}
                        >
                          Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/settings"
                          className={`block px-4 py-2 text-sm text-black ${active ? 'bg-gray-100' : ''}`}
                        >
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
