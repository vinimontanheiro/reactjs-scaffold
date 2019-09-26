import React from 'react';
import { Provider as ReduxProvider, useSelector, shallowEqual } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { persistor, store } from './redux/store';
import * as serviceWorker from './serviceWorker';
import RoutesProvider from './modules/Routes/RoutesProvider';
import I18nProvider from './services/i18n/I18nProvider';
import './assets/scss/index.scss';

const App = () => {
  const { isAuth } = useSelector(
    state => ({
      isAuth: state.App.isAuth,
    }),
    shallowEqual,
  );
  return (
    <I18nProvider>
      <BrowserRouter basename="/">
        <RoutesProvider isAuth={isAuth} />
      </BrowserRouter>
    </I18nProvider>
  );
};

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>,
  document.getElementById(`root`),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
