import React from 'react';
import './App.scss';

import SelectRepo from './containers/SelectRepo';
import Nav from './containers/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
        <div className="App__hero">
          <h1>Hello!</h1>
        </div>
      <SelectRepo />
    </div>
  );
}

export default App;
