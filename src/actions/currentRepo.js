/*
 * Types
 */

export const UPDATE_CURRENT_REPO = 'UPDATE_CURRENT_REPO';

/*
 * Creators
 */

export function updateCurentRepo(repo) {
  return {
    type: UPDATE_CURRENT_REPO,
    repo
  }
}
