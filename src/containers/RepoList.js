import { connect } from 'react-redux';

import fetchIssues from '../actions/issues';
import fetchRepos from '../actions/repos';
import { updatePrioritizedIssues } from '../actions/prioritizedIssues';
import { updateCurentRepo } from '../actions/currentRepo';

import { getIssues } from '../reducers/issues';
import { getRepos } from '../reducers/repos';
import { getUser } from '../reducers/user';
import { getPrioritizedIssues } from '../reducers/prioritizedIssues';
import { getCurrentRepo } from '../reducers/currentRepo';

import RepoList from '../components/RepoList'

const mapStateToProps = (state, ownProps) => {
  return {
    repos: getRepos(state),
    user: getUser(state),
    currentRepo: getCurrentRepo(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: () => fetchRepos()(dispatch),
    updateCurentRepo: repo => dispatch(updateCurentRepo(repo))
  }
};

const RepoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);

export default RepoListContainer
