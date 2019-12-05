import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

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


export default withRouter(IssueView);
