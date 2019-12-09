import React from 'react';
import { connect } from 'react-redux';

import fetchUser from './actions/user';
import { getUser } from './reducers/user';

import './App.scss';

import Nav from './components/Nav';
import SelectRepo from './containers/SelectRepo';
import IssueView from './components/IssueView';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App({ user, fetchUser }) {
  if (!user) {
    fetchUser();
    return null;
  }

  return (
    <Router>
      <div className="App">
        <Nav user={user}/>
        <div className="App__hero">
          <h1>Hello!</h1>
        </div>
        <div className="App__container">
          <Switch>
            <Route exact path="/" component={SelectRepo} />
            <Route path="/repo/:owner/:name" component={IssueView} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: getUser(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => fetchUser()(dispatch)
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer
