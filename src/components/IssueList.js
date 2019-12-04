import React, { useState } from 'react';
import placeholderAvatar from '../images/person.jpeg';
import Moment from 'moment';

import './IssueList.scss';

const IssueList = ({ repos, issues, user, fetchIssues, fetchRepos, match }) => {
  if (!issues) {
    fetchIssues(match.params.owner, match.params.name);
    return null;
  }

  if (!repos) {
    fetchRepos();
    return null;
  }

  const avatarUrl = issue => issue.assignee ? issue.assignee.avatar_url : placeholderAvatar;

  const issueList = issues.map(issue =>(
    <div className="IssueList__issues-row" key={issue.id}>
      <span className="IssueList__issues-row--avatar">
        <img src={ avatarUrl(issue) } />
      </span>
      <span className="IssueList__issues-row--title">
        { issue.title }
      </span>
      <span className="IssueList__issues-row--created">
        { Moment(issue.created_at).format('MM/DD/YYYY') }
      </span>
      <span className="IssueList__issues-row--updated">
        { Moment(issue.updated_at).fromNow() }
      </span>
    </div>
  ))

  const repoList = repos.map(repo =>(
    <div className="IssueList__repos-row" key={repo.id}>
      <span className="IssueList__repos-row--name">
        {repo.name}
      </span>
    </div>
  ))

  return (
    <div className="IssueList">
      <div className="IssueList__repos">
      { repoList }
      </div>
      <div className="IssueList__issues">
        <div className="IssueList__issues-row IssueList__issues-row--header">
          <span className="IssueList__issues-row--avatar">
            Assignee
          </span>
          <span className="IssueList__issues-row--title">
            Issue Title
          </span>
          <span className="IssueList__issues-row--created">
            Created At
          </span>
          <span className="IssueList__issues-row--updated">
            Last Updated
          </span>
        </div>
        { issueList }
      </div>
    </div>
  );
}


export default IssueList;
