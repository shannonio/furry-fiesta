import { getRepos } from '../utils/ApiClient';

function fetchRepos() {
  return dispatch => {
    dispatch(fetchReposPending());
    getRepos().then(res => {
      if(res.error) {
        throw(res.error);
      }
      dispatch(fetchReposSuccess(res));
      return res;
    })
    .catch(error => {
      dispatch(fetchReposError(error));
    })
  }
}

/*
 * Types
 */

 export const FETCH_REPOS_PENDING = 'FETCH_REPOS_PENDING';
 export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
 export const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';

/*
 * Creators
 */

export function fetchReposPending() {
  return {
    type: FETCH_REPOS_PENDING
  }
}

export function fetchReposSuccess(repos) {
  return {
    type: FETCH_REPOS_SUCCESS,
    repos
  }
}

export function fetchReposError(error) {
  return {
    type: FETCH_REPOS_ERROR,
    error: error
  }
}

export default fetchRepos;
