import axios from 'axios';

const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
const headers = { Authorization: `token ${githubToken}` };

const GitHubService = {
 
  getUserData: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, { headers });
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error.response ? error.response.data : error.message);
      throw new Error('Error fetching user data');
    }
  },

  getUserTopLanguages: async (username) => {
    try {
      const response = await axios.get(`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact`);
      return response.data;
    } catch (error) {
      console.error('Error fetching GitHub top languages:', error.response ? error.response.data : error.message);
      throw new Error('Error fetching GitHub top languages');
    }
  },

  getUserRepos: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, { headers });
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching user repos:', error.response ? error.response.data : error.message);
      throw new Error('Error fetching user repos');
    }
  },

  getRepoCommits: async (username, repoName) => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/commits`, { headers });
      return response.data;
    } catch (error) {
      console.error(`Error fetching commits for ${repoName}:`, error.response ? error.response.data : error.message);

      // Check if it's a conflict error (409)
      if (error.response && error.response.status === 409) {
        console.error(`Conflict error for ${repoName}. Please check the repository state.`);
      }

      throw new Error(`Error fetching commits for ${repoName}`);
    }
  },
  getRepoIssues: async (username, repoName) => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/issues?state=open`, { headers });
      return response.data;
    } catch (error) {
      console.error(`Error fetching issues for ${repoName}:`, error.response ? error.response.data : error.message);
      throw new Error(`Error fetching issues for ${repoName}`);
    }
  },

  getUserFollowers: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/followers`, { headers });
      return response.data.length; // Assuming we only need the count
    } catch (error) {
      console.error('Error fetching user followers:', error.response ? error.response.data : error.message);
      throw new Error('Error fetching user followers');
    }
  },

  getUserFollowing: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/following`, { headers });
      return response.data.length;
    } catch (error) {
      console.error('Error fetching user following:', error.response ? error.response.data : error.message);
      throw new Error('Error fetching user following');
    }
  },

  getUserMostUsedLanguage: async (username) => {
    try {
      const repos = await GitHubService.getUserRepos(username);
      let languageMap = {};

      // Count occurrences of each language
      repos.forEach(repo => {
        if (repo.language) {
          if (languageMap[repo.language]) {
            languageMap[repo.language]++;
          } else {
            languageMap[repo.language] = 1;
          }
        }
      });

      // Find the most used language
      let mostUsedLanguage = '';
      let maxCount = 0;
      for (let language in languageMap) {
        if (languageMap[language] > maxCount) {
          maxCount = languageMap[language];
          mostUsedLanguage = language;
        }
      }

      return mostUsedLanguage;
    } catch (error) {
      console.error('Error fetching most used language:', error.response ? error.response.data : error.message);
      throw new Error('Error fetching most used language');
    }
  },

  // Fetch number of repositories for a given username
  getUserRepoCount: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, { headers });
      return response.data.length; // Assuming we only need the count
    } catch (error) {
      console.error('Error fetching user repositories:', error.response ? error.response.data : error.message);
      throw new Error('Error fetching user repositories');
    }
  },
};

export default GitHubService;