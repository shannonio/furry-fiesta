import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.scss';
import App from './App';
import { loadState, saveState } from './utils/LocalStorage';
import myAppReducer from './reducers';

const persistedState = loadState();

const store = createStore(myAppReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveState({
    prioritizedIssues: store.getState().prioritizedIssues
  });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
