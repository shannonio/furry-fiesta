import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import logo from '../images/octocat.png';
import './SelectRepo.scss';

const SelectRepo = ({ repos, fetchRepos, history }) => {
  const [selectedRepo, setSelectedRepo] = useState({});

  if (!repos) {
    fetchRepos();
    return null;
  }

  if (!selectedRepo.id) {
    setSelectedRepo(repos[0]);
  }

  const selectRepo = (repo) => {
    setSelectedRepo(repo);
    history.push(`/repo/${repo.owner.login}/${repo.name}`);
  }

  const isOptionSelected = (opt) => opt.id === selectedRepo.id;

  const selectValues = repos.map((repo, idx) => (
    <div className="select-box__value" key={idx}>
      <input className="select-box__input"
             type="radio"
             id={idx}
             value={repo.id}
             name={repo.name}
             readOnly={true}
             checked={isOptionSelected(repo)}
      />
      <p className="select-box__input-text">{repo.name}</p>
    </div>
  ));

  const selectOptions = repos.map((repo, idx) => (
    <li onClick={() => selectRepo(repo)} key={idx}>
      <label className="select-box__option" htmlFor={idx} aria-hidden="aria-hidden">
        { repo.name }
      </label>
    </li>
  ));

  return (
    <div className="SelectRepo">
      <div className="SelectRepo__select-box-container">
        <div className="select-box">
          <div className="select-box__current" tabIndex="1">
            { selectValues }
            <img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/>
          </div>
          <ul className="select-box__list">
            { selectOptions }
          </ul>
        </div>
      </div>
    </div>
  );
}


export default withRouter(SelectRepo);
