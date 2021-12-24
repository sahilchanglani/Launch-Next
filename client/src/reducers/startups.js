import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        startups: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      }
    case FETCH_BY_SEARCH:
      return { ...state, startups: action.payload };
    case LIKE:
      return state.map((startup) => (startup._id === action.payload._id ? action.payload : startup));
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((startup) => (startup._id === action.payload._id ? action.payload : startup));
    case DELETE:
      return state.filter((startup) => startup._id !== action.payload);
    default:
      return state;
  }
};

