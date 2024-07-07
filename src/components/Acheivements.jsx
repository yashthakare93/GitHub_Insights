import React, { useState, useEffect } from 'react';
import GitHubService from '../Service/GithubService';

const Achievements = ({ username }) => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const data = await GitHubService.getUserAchievements(username);
        setAchievements(data);
        setError('');
      } catch (error) {
        console.error('Error fetching achievements:', error);
        setError('Error fetching achievements');
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, [username]);

  return (
    <div id="achievements" className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Achievements;
