import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from '../actions/user';

function user(state = {}, action) {
  switch(action.type) {
    case FETCH_USER_PENDING:
      return {
        pending: true
      }
    case FETCH_USER_SUCCESS:
      return {
        pending: false,
        data: action.user,
      }
    case FETCH_USER_ERROR:
      return {
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export const getUser = state => state.user.data;
export const getUserPending = state => state.pending;
export const getUserError = state => state.error;

export default user;
