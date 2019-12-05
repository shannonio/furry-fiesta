import {
  UPDATE_PRIORITIZED_ISSUES,
} from '../actions/prioritizedIssues';

function prioritizedIssues(state = {}, action) {
  switch(action.type) {
    case UPDATE_PRIORITIZED_ISSUES:
      return {
        ...state,
        [action.repoName]: action.issues
      }
    default:
      return state;
  }
}

export const getPrioritizedIssues = (state) => {
  return state.currentRepo ? state.prioritizedIssues[state.currentRepo.name] : [];
};

export default prioritizedIssues;
