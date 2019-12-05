import {
  UPDATE_PRIORITIZED_ISSUES,
} from '../actions/prioritizedIssues';

function prioritizedIssues(state = {}, action) {
  switch(action.type) {
    case UPDATE_PRIORITIZED_ISSUES:
      console.log(action)
      return {
        [action.repoName]: action.issues,
        ...state
      }
    default:
      return state;
  }
}

export const getPrioritizedIssues = (state, repoName) => state.prioritizedIssues[repoName];

export default prioritizedIssues;
