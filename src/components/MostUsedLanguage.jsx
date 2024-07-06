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
    <div>
      <h5>Most Used Language</h5>
      <p>{mostUsedLanguage}</p>
    </div>
  );
};

export default MostUsedLanguage;
