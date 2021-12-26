import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_STARTUP, START_LOADING,END_LOADING, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getStartup = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchStartup(id);

    console.log(data);

    dispatch({ type: FETCH_STARTUP, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getStartups = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchStartups(page);

    console.log(data);

    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getStartupsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: {data} } = await api.fetchStartupsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
}

export const createStartup = (startup) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createStartup(startup);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStartup = (id, startup) => async (dispatch) => {
  try {
    const { data } = await api.updateStartup(id, startup);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeStartup = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeStartup(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteStartup = (id) => async (dispatch) => {
  try {
    await api.deleteStartup(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
