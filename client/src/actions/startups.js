import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getStartups = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStartups();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createStartup = (startup) => async (dispatch) => {
  try {
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
