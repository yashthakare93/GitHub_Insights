import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const SidebarMain = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/6 bg-gray-800 text-white">
        <Sidebar />
      </div>
      <div className="w-5/6 bg-white flex flex-col">
        <MainContent />
      </div>
    </div>
  );
};

export default SidebarMain;
