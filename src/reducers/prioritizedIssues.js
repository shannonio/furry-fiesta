import {
  UPDATE_PRIORITIZED_ISSUES,
} from '../actions/prioritizedIssues';

function prioritizedIssues(state = {}, action) {
  switch(action.type) {
    case UPDATE_PRIORITIZED_ISSUES:
      return {
        [action.repoName]: action.issues,
        ...state
      }
    default:
      return state;
  }
}

export const getPrioritizedIssues = (state) => state.prioritizedIssues[state.currentRepo.name];

export default prioritizedIssues;
