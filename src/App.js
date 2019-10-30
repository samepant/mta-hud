import React from 'react';

import Clock from './clock';
import MtaArrivals from './mtaArrivals';
import SvgBase from './svgBase';
import Weather from './weather';

import './App.css';

function App() {
  return (
    <div className="App">
      <MtaArrivals />
      <Clock />
      <Weather />
      <SvgBase />
    </div>
  );
}

export default App;
