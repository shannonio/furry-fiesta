import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import fetchIssues from '../actions/issues';
import fetchRepos from '../actions/repos';
import { updatePrioritizedIssues } from '../actions/prioritizedIssues';
import { updateCurentRepo } from '../actions/currentRepo';

import { getIssues } from '../reducers/issues';
import { getRepos } from '../reducers/repos';
import { getPrioritizedIssues } from '../reducers/prioritizedIssues';
import { getCurrentRepo } from '../reducers/currentRepo';

import IssueList from '../components/IssueList'

const mapStateToProps = (state, ownProps) => {
  return {
    repos: getRepos(state),
    issues: getIssues(state),
    currentRepo: getCurrentRepo(state),
    prioritizedIssues: getPrioritizedIssues(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIssues: (username, repo) => fetchIssues(username, repo)(dispatch),
    fetchRepos: () => fetchRepos()(dispatch),
    updatePrioritizedIssues: (repoName, issues) => dispatch(updatePrioritizedIssues(repoName, issues)),
    updateCurentRepo: repo => dispatch(updateCurentRepo(repo))
  }
};

const IssueListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(IssueList));

export default IssueListContainer
