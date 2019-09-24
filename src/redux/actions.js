import { createAction } from 'redux-actions';

export const RESET_STORE = `RESET_STORE`;
export const resetStore = createAction(RESET_STORE);

export const SET_APP = `SET_APP`;
export const setApp = createAction(SET_APP);

export const SET_LOADING = `SET_LOADING`;
export const setLoading = createAction(SET_LOADING);
