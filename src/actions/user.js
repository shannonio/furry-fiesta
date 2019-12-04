import { getUser } from '../utils/ApiClient';

function fetchUser() {
  return dispatch => {
    dispatch(fetchUserPending());
    getUser().then(res => {
      if(res.error) {
        throw(res.error);
      }
      dispatch(fetchUserSuccess(res));
      return res;
    })
    .catch(error => {
      dispatch(fetchUserError(error));
    })
  }
}

/*
 * Types
 */

 export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
 export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
 export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

/*
 * Creators
 */

export function fetchUserPending() {
  return {
    type: FETCH_USER_PENDING
  }
}

export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    user: user
  }
}

export function fetchUserError(error) {
  return {
    type: FETCH_USER_ERROR,
    error: error
  }
}

export default fetchUser;
