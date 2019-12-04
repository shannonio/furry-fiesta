import React from 'react';
import './App.scss';

import SelectRepo from './containers/SelectRepo';
import Nav from './containers/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <SelectRepo />
    </div>
  );
}

export default App;
