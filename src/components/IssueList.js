import React, { useEffect } from 'react';
import placeholderAvatar from '../images/person.jpeg';
import Moment from 'moment';
import { withRouter } from 'react-router-dom';

import './IssueList.scss';

import RepoList from '../containers/RepoList';

const IssueList = ({
    issues,
    prioritizedIssues,
    currentRepo,
    fetchIssues,
    match,
    history,
    updatePrioritizedIssues
  }) => {

  useEffect(() => {
    fetchIssues(match.params.owner, match.params.name);
  }, [match.params.name]);

  const avatarUrl = issue => issue.assignee ? issue.assignee.avatar_url : placeholderAvatar;

  const drop = (e) => {
    e.preventDefault();
    const moveTo = e.target.id || e.target.parentElement.id;
    const moveFrom = e.dataTransfer.getData("issueId");
    const prioritizedIssuesCopy = Array.from(issueListToUse);
    prioritizedIssuesCopy.splice(moveFrom, 1);
    prioritizedIssuesCopy.splice(moveTo, 0, issueListToUse[moveFrom]);
    updatePrioritizedIssues(currentRepo.name, prioritizedIssuesCopy);
  }

  const drag = (issueId, issue) => {
    return (e) => {
      e.dataTransfer.setData("issueId", issueId);
    }
  }

  const allowDrop = (e) => {
    e.preventDefault();
  }

  const issueListToUse = prioritizedIssues || issues;

  const issueList = () => issueListToUse.map((issue, idx) => (
    <div className="IssueList__row"
         onDragOver={allowDrop}
         draggable="true"
         onDragStart={drag(idx, issue)}
         id={idx}
         key={issue.id}>
      <span className="IssueList__row--avatar">
        <img src={ avatarUrl(issue) } />
      </span>
      <span className="IssueList__row--title">
        { issue.title }
      </span>
      <span className="IssueList__row--created">
        { Moment(issue.created_at).format('MM/DD/YYYY') }
      </span>
      <span className="IssueList__row--updated">
        { Moment(issue.updated_at).fromNow() }
      </span>
    </div>
  ));

  return (
    <div className="IssueList" onDrop={drop}>
      <div className="IssueList__row IssueList__row--header">
        <span className="IssueList__row--avatar">
          Assignee
        </span>
        <span className="IssueList__row--title">
          Issue Title
        </span>
        <span className="IssueList__row--created">
          Created At
        </span>
        <span className="IssueList__row--updated">
          Last Updated
        </span>
      </div>
      { issueListToUse && issueList() }
    </div>
  );
}


export default withRouter(IssueList);
