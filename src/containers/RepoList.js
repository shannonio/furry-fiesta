import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import fetchRepos from '../actions/repos';
import { updateCurentRepo } from '../actions/currentRepo';

import { getRepos } from '../reducers/repos';
import { getUser } from '../reducers/user';
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
)(withRouter(RepoList));

export default RepoListContainer
