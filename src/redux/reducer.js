import { handleActions } from 'redux-actions';
import { SET_APP, SET_LOADING, RESET_STORE } from './actions';
import { getBrowserLanguage } from '../services/utils';

const initialState = {
  loading: false,
  language: getBrowserLanguage(),
  timezoneSTR: `UTC`,
  isAuth: false,
};

const App = handleActions(
  {
    [RESET_STORE]: () => initialState,
    [SET_APP]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [SET_LOADING]: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
  },
  initialState,
);

export default App;
