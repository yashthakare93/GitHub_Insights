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
    <div className="bg-white shadow-md rounded-lg p-4 ">
      <h5 className="text-lg font-semibold mb-2">Most Used Language</h5>
      <div className="text-center">
        <p className="text-xl font-bold text-yellow-400">{mostUsedLanguage}</p>
      </div>
    </div>
  );
};

export default MostUsedLanguage;
