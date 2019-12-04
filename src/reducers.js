import { combineReducers } from 'redux';

import repos from './reducers/repos';
import user from './reducers/user';
import issues from './reducers/issues';

const myAppReducer = combineReducers({
  repos,
  user,
  issues,
});

export default myAppReducer
