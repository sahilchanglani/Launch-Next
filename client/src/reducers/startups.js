import { FETCH_ALL, FETCH_BY_SEARCH, START_LOADING, END_LOADING, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (state = { isLoading: true, startups: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
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
      return { ...state, startups: state.startups.map((startup) => (startup._id === action.payload._id ? action.payload : startup))}
    case CREATE:
      return { ...state, startups: [...state.startups, action.payload]}
    case UPDATE:
      return { ...state, startups: state.startups.map((startup) => (startup._id === action.payload._id ? action.payload : startup))}
    case DELETE:
      return { ...state, startups: state.startups.filter((startup) => startup._id !== action.payload)}
    default:
      return state;
  }
};

