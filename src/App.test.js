import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';

const mockStore = configureStore([]);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = mockStore({
    user: {},
  });

  const component = ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
  ), div);

  expect(component).toMatchSnapshot();

  ReactDOM.unmountComponentAtNode(div);
});
