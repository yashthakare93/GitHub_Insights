import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GitHubData from './components/GitHubData'; // Adjust path as per your project structure

import SidebarMain from './components/SidebarMain';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<div className='flex bg-custom-bg justify-center '><GitHubData /></div>} />
      <Route path="/insights/:username" element={<div className='flex items-center justify-center min-h-screen bg-cover '><SidebarMain /></div>} />
    </Routes>
  </Router>
  );
};


export default App;
