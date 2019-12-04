import {
  FETCH_ISSUES_PENDING,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_ERROR
} from '../actions/issues';

function issues(state = {}, action) {
  switch(action.type) {
    case FETCH_ISSUES_PENDING:
      return {
        pending: true
      }
    case FETCH_ISSUES_SUCCESS:
      return {
        pending: false,
        data: action.issues
      }
    case FETCH_ISSUES_ERROR:
      return {
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export const getIssues = state => state.issues.data;
export const getIssuesPending = state => state.pending;
export const getIssuesError = state => state.error;

export default issues;
