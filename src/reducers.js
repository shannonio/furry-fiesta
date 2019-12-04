import { combineReducers } from 'redux';

import repos from './reducers/repos';

const myAppReducer = combineReducers({
  repos
});

export default myAppReducer
