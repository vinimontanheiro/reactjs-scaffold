import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { persistor, store } from './redux/store';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import RoutesProvider from './modules/Routes/RoutesProvider';

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/tests">
        <RoutesProvider isAuth />
      </BrowserRouter>
    </PersistGate>
  </ReduxProvider>,
  document.getElementById(`root`),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
