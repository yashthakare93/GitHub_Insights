import React, { useState, useEffect } from 'react';
import GitHubService from '../Service/GithubService';

const MostUsedLanguage = ({ username }) => {
  const [mostUsedLanguage, setMostUsedLanguage] = useState('');

  useEffect(() => {
    const fetchMostUsedLanguage = async () => {
      try {
        const language = await GitHubService.getUserMostUsedLanguage(username);
        setMostUsedLanguage(language);
      } catch (error) {
        console.error('Error fetching most used language:', error);
      }
    };

    fetchMostUsedLanguage();
  }, [username]);

  return (
    <div className="p-4 text-center"> 
      <h5 className="text-sm font-semibold mb-2">Top Language</h5>
      <p className="text-sm font-bold text-yellow-400">{mostUsedLanguage}</p>
    </div>
  );
};

export default MostUsedLanguage;
