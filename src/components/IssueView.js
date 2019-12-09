import React from 'react';

import './IssueView.scss';

import RepoList from '../containers/RepoList';
import IssueList from '../containers/IssueList';

const IssueView = () => {

  return (
    <div className="IssueView">
      <RepoList />
      <IssueList />
    </div>
  );
}


export default IssueView;
