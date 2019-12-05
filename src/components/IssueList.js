import React, { useEffect } from 'react';
import placeholderAvatar from '../images/person.jpeg';
import Moment from 'moment';
import { find } from 'lodash';

import './IssueList.scss';

const IssueList = ({
    repos,
    issues,
    prioritizedIssues,
    currentRepo,
    user,
    fetchIssues,
    fetchRepos,
    updateCurentRepo,
    match,
    history,
    updatePrioritizedIssues
  }) => {

  useEffect(() => {
    if (!repos) {
      fetchRepos().then((res) => {
        const repo = find(res, o => {
          return o.name === match.params.name
        });
        updateCurentRepo(repo);
      })
    }

    if (!issues) {
      fetchIssues(match.params.owner, match.params.name);
    }

    if (repos) {
      const repo = find(repos, o => {
        return o.name === match.params.name
      });
      updateCurentRepo(repo);
    }
  }, []);

  const avatarUrl = issue => issue.assignee ? issue.assignee.avatar_url : placeholderAvatar;

  const isActiveRepoClass = repo => repo.name === match.params.name ? 'IssueList__repos-row--active' : '';

  const changeRepo = repo => {
    history.push(`/repo/${repo.owner.login}/${repo.name}`);
    updateCurentRepo(repo);
    fetchIssues(repo.owner.login, repo.name);
  };

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
    <div className="IssueList__issues-row"
         onDragOver={allowDrop}
         draggable="true"
         onDragStart={drag(idx, issue)}
         id={idx}
         key={issue.id}>
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
  ));

  const repoList = () => repos.map(repo =>(
    <div className={`IssueList__repos-row ${isActiveRepoClass(repo)}`}
         onClick={() => changeRepo(repo)}
         key={repo.id}>
      <span className="IssueList__repos-row--name">
        { repo.name }
      </span>
    </div>
  ))

  return (
    <div className="IssueList">
      <div className="IssueList__repos">
      { repos && repoList() }
      </div>
      <div className="IssueList__issues" onDrop={drop}>
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
        { issueListToUse && issueList() }
      </div>
    </div>
  );
}


export default IssueList;
