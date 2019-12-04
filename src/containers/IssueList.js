import { connect } from 'react-redux';

import fetchIssues from '../actions/issues';
import fetchRepos from '../actions/repos';

import { getIssues } from '../reducers/issues';
import { getRepos } from '../reducers/repos';
import { getUser } from '../reducers/user';

import IssueList from '../components/IssueList'

const mapStateToProps = (state, ownProps) => {
  return {
    repos: getRepos(state),
    issues: getIssues(state),
    user: getUser(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIssues: (username, repo) => fetchIssues(username, repo)(dispatch),
    fetchRepos: () => fetchRepos()(dispatch)
  }
};

const IssueListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueList);

export default IssueListContainer
