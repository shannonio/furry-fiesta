import { combineReducers } from 'redux';

import repos from './reducers/repos';
import user from './reducers/user';
import issues from './reducers/issues';
import prioritizedIssues from './reducers/prioritizedIssues';

const myAppReducer = combineReducers({
  repos,
  user,
  issues,
  prioritizedIssues,
});

export default myAppReducer
