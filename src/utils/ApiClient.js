export function getRepos() {
  return getGithubData('https://api.github.com/user/repos?type=all&sort=updated');
}

export function getIssuesForRepo(username, repoName) {
  return getGithubData(`https://api.github.com/repos/${username}/${repoName}/issues`);
}

export function getUser() {
  return getGithubData(`https://api.github.com/user`);
}

async function getGithubData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    },
  });

  return await response.json();
}
