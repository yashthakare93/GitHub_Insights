import axios from 'axios';


const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
const headers = { Authorization: `token ${githubToken}` };


const GitHubService = {
  // Fetch user data for a given username
  getUserData: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, { headers });
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw new Error('Error fetching user data');
    }
  },
  // getUserContributions: async (username) => {
  //   try {
  //     const response = await axios.get(`https://api.github.com/users/${username}/events`, { headers });
  //     const contributions = response.data.filter(event => event.type === 'PushEvent');
  //     return contributions.map(contribution => ({
  //       date: new Date(contribution.created_at).toLocaleDateString(),
  //       count: contribution.payload.commits.length
  //     }));
  //   } catch (error) {
  //     console.error('Error fetching GitHub contributions:', error);
  //     throw new Error('Error fetching GitHub contributions');
  //   }
  // },

  getUserTopLanguages: async (username) => {
    try {
      const response = await axios.get(`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact`);
      return response.data;
    } catch (error) {
      console.error('Error fetching GitHub top languages:', error);
      throw new Error('Error fetching GitHub top languages');
    }
  },

  // Fetch repositories for a given username
  getUserRepos: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, { headers });
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching user repos:', error);
      throw new Error('Error fetching user repos');
    }
  },

  // Fetch commits for a given repository belonging to a username
  getRepoCommits: async (username, repoName) => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/commits`, { headers });
      return response.data;
    } catch (error) {
      console.error(`Error fetching commits for ${repoName}:`, error);
      throw new Error(`Error fetching commits for ${repoName}`);
    }
  },

  // Fetch open issues for a given repository belonging to a username
  getRepoIssues: async (username, repoName) => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/issues?state=open`, { headers });
      return response.data;
    } catch (error) {
      console.error(`Error fetching issues for ${repoName}:`, error);
      throw new Error(`Error fetching issues for ${repoName}`);
    }
  },

  // Fetch number of followers for a given username
  getUserFollowers: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/followers`, { headers });
      return response.data.length; // Assuming we only need the count
    } catch (error) {
      console.error('Error fetching user followers:', error);
      throw new Error('Error fetching user followers');
    }
  },

  // Fetch most used programming language for a given username
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
      console.error('Error fetching most used language:', error);
      throw new Error('Error fetching most used language');
    }
  },

  // Fetch number of repositories for a given username
  getUserRepoCount: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, { headers });
      return response.data.length; // Assuming we only need the count
    } catch (error) {
      console.error('Error fetching user repositories:', error);
      throw new Error('Error fetching user repositories');
    }
  },

 

  // Fetch number of issues for a given username and all repositories
  getUserTotalIssues: async (username) => {
    try {
      const repos = await GitHubService.getUserRepos(username);
      let totalIssues = 0;

      // Fetch issues for each repository
      for (const repo of repos) {
        const issues = await GitHubService.getRepoIssues(username, repo.name);
        totalIssues += issues.length;
      }

      return totalIssues;
    } catch (error) {
      console.error('Error fetching user total issues:', error);
      throw new Error('Error fetching user total issues');
    }
  },
};

export default GitHubService;

