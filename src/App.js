import React from 'react';
import './App.scss';

import SelectRepo from './containers/SelectRepo';
import Nav from './containers/Nav';

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
              Repo!
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
