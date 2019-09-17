import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import HomeComponent from './modules/HOME/HomeComponent';
import './App.scss';

const App = ({ x }) => {
const [color, setColor] = useState("");

const changeColor = useCallback(
  (newColor) => {
    setColor(newColor);
  },
  [],
);
  useEffect(() => { // Did mount
    setColor("red");
    console.log(` 1 Im ${color}`);
  }, []);

  useEffect(() => { // Did update
    console.log(`2 Im ${color}`);
  }, [color]);

  return (
    <HomeComponent className="App" color={color}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={()=>{
            changeColor("green");
          }}
        >
          Learn React
        </button>
      </header>
    </HomeComponent>
  );
}

export default App;
