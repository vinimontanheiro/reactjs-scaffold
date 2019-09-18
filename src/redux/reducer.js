import { handleActions } from 'redux-actions';
import { SET_APP, SET_LOADING } from './actions';

const initialState = {
  loading: false,
  x: false,
};

const App = handleActions(
  {
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
