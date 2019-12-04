import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';

const mockStore = configureStore([]);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = mockStore({
    repos: {
      pending: false,
      data: [
        { id: 123 }
      ]
    },
    issues: {
      pending: false,
      data: [
        { id: 123 }
      ]
    },
    user: {
      pending: false,
      data: [
        { login: 'foo' }
      ]
    },
  });

  const component = ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
  ), div);

  expect(component).toMatchSnapshot();

  ReactDOM.unmountComponentAtNode(div);
});
