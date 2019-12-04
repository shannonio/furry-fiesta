import React from 'react';
import './App.scss';

import Nav from './containers/Nav';
import SelectRepo from './containers/SelectRepo';
import IssueList from './components/IssueList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="App__hero">
        <h1>Hello!</h1>
        </div>
        <div className="App__container">
          <Switch>
            <Route exact path="/">
              <SelectRepo />
            </Route>
            <Route path="/repo/:id">
              <IssueList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
