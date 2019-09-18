import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import HomeComponent from './modules/HOME/HomeComponent';
import './App.scss';
import Loading from './modules/ui/Loading';
import useLoading from './modules/hooks/useLoading';

const App = () => {
  const [color, setColor] = useState(``);
  const { updateLoading } = useLoading();

  const changeColor = useCallback(newColor => {
    setColor(newColor);
  }, []);

  useEffect(() => {
    // Did mount
    setColor(`red`);
    console.log(` 1 Im ${color}`);
  }, []);

  useEffect(() => {
    // Did update
    console.log(`2 Im ${color}`);
  }, [color]);

  useEffect(() => {
    updateLoading(true);
    const timer = setTimeout(() => {
      updateLoading(false);
    }, 6000);
    return () => timer && clearTimeout(timer);
  }, []);

  return (
    <HomeComponent className="App" color={color}>
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <button
          type="button"
          className="App-link"
          onClick={() => {
            changeColor(`green`);
          }}
        >
          Learn React
        </button>
      </>
      <Loading />
    </HomeComponent>
  );
};

export default App;
