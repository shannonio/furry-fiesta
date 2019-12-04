import { combineReducers } from 'redux';

import repos from './reducers/repos';
import user from './reducers/user';

const myAppReducer = combineReducers({
  repos,
  user
});

export default myAppReducer
