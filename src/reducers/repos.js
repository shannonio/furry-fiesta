import {
  FETCH_REPOS_PENDING,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_ERROR
} from '../actions/repos';

function repos(state = {}, action) {
  switch(action.type) {
    case FETCH_REPOS_PENDING:
      return {
        pending: true
      }
    case FETCH_REPOS_SUCCESS:
      return {
        pending: false,
        data: action.repos
      }
    case FETCH_REPOS_ERROR:
      return {
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export const getRepos = state => state.repos.data;
export const getReposPending = state => state.pending;
export const getReposError = state => state.error;

export default repos;
