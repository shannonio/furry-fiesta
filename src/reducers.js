import { combineReducers } from 'redux';

import repos from './reducers/repos';
import user from './reducers/user';
import issues from './reducers/issues';
import prioritizedIssues from './reducers/prioritizedIssues';
import currentRepo from './reducers/currentRepo';

const myAppReducer = combineReducers({
  repos,
  user,
  issues,
  prioritizedIssues,
  currentRepo,
});

export default myAppReducer
