import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (startups = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return startups.map((startup) => (startup._id === action.payload._id ? action.payload : startup));
    case CREATE:
      return [...startups, action.payload];
    case UPDATE:
      return startups.map((startup) => (startup._id === action.payload._id ? action.payload : startup));
    case DELETE:
      return startups.filter((startup) => startup._id !== action.payload);
    default:
      return startups;
  }
};

