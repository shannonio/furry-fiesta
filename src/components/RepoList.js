import React, { useEffect } from 'react';
import { find } from 'lodash';

import './RepoList.scss';

const RepoList = ({
    repos,
    currentRepo,
    updateCurentRepo,
    fetchRepos,
    match,
    history
  }) => {

  useEffect(() => {
    if (!repos) { fetchRepos() }
  }, [fetchRepos, repos]);

  useEffect(() => {
    const repo = find(repos, o => {
      return o.name === match.params.name
    });
    updateCurentRepo(repo);
  }, [repos, match.params.name, updateCurentRepo])

  const isActiveRepoClass = repo => {
    return repo.name === currentRepo.name ? 'RepoList__repos-row--active' : '';
  };

  const changeRepo = repo => history.push(`/repo/${repo.owner.login}/${repo.name}`);

  const repoList = () => repos.map(repo =>(
    <div className={`RepoList__repos-row ${isActiveRepoClass(repo)}`}
         onClick={() => changeRepo(repo)}
         key={repo.id}>
      <span className="RepoList__repos-row--name">
        { repo.name }
      </span>
    </div>
  ));

  return (
    <div className="RepoList">
      <div className="RepoList__repos">
        { repos && repoList() }
      </div>
    </div>
  );
}


export default RepoList;
