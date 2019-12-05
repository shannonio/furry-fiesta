import { getIssuesForRepo } from '../utils/ApiClient';

function fetchIssues(username, repo) {
  return dispatch => {
    dispatch(fetchIssuesPending());
    return getIssuesForRepo(username, repo).then(res => {
      if(res.error) {
        throw(res.error);
      }
      dispatch(fetchIssuesSuccess(res));
      return res;
    })
    .catch(error => {
      dispatch(fetchIssuesError(error));
    })
  }
}

/*
 * Types
 */

 export const FETCH_ISSUES_PENDING = 'FETCH_ISSUES_PENDING';
 export const FETCH_ISSUES_SUCCESS = 'FETCH_ISSUES_SUCCESS';
 export const FETCH_ISSUES_ERROR = 'FETCH_ISSUES_ERROR';

/*
 * Creators
 */

export function fetchIssuesPending() {
  return {
    type: FETCH_ISSUES_PENDING
  }
}

export function fetchIssuesSuccess(issues) {
  return {
    type: FETCH_ISSUES_SUCCESS,
    issues
  }
}

export function fetchIssuesError(error) {
  return {
    type: FETCH_ISSUES_ERROR,
    error: error
  }
}

export default fetchIssues;
