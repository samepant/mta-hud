import React from 'react';

import Clock from './clock';
import SvgBase from './svgBase';
import Videos from './videos';
import Weather from './weather';

import './App.css';

function App() {
  return (
    <div className="App">
      <Videos />
      <Clock />
      <Weather />
      <SvgBase />
    </div>
  );
}

export default App;
