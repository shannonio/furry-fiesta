/*
 * Types
 */

export const UPDATE_PRIORITIZED_ISSUES = 'UPDATE_PRIORITIZED_ISSUES';

/*
 * Creators
 */

export function updatePrioritizedIssues(repoName, issues) {
  return {
    type: UPDATE_PRIORITIZED_ISSUES,
    repoName,
    issues
  }
}
