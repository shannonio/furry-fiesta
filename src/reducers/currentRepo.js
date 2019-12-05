import {
  UPDATE_CURRENT_REPO,
} from '../actions/currentRepo';

import {
  clearIssues,
} from '../actions/issues';

function currentRepo(state = {}, action) {
  switch(action.type) {
    case UPDATE_CURRENT_REPO:
      return {
        ...action.repo
      }
    default:
      return state;
  }
}

export const getCurrentRepo = state => state.currentRepo;

export default currentRepo;
