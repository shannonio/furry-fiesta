import React, { useState } from 'react';
import Moment from 'moment';

const IssueList = ({ repos, issues, user, fetchIssues, fetchRepos, match }) => {
  if (!issues) {
    fetchIssues(match.params.owner, match.params.name);
    return null;
  }

  if (!repos) {
    fetchRepos();
    return null;
  }

  return (
    <div className="IssueList">
      <div className="IssueList__repos">
      </div>
      <div className="IssueList__issues">
      </div>
    </div>
  );
}


export default IssueList;
