import { combineReducers } from 'redux';

import user from './reducers/user';

const myAppReducer = combineReducers({
  user
});

export default myAppReducer
