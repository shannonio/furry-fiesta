export function getRepos() {
  return getData('https://api.github.com/user/repos');
}

async function getData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'GET',
    cache: 'force-cache',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    },
  });

  return await response.json();
}
