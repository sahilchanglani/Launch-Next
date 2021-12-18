import { combineReducers } from 'redux';

import startups from './startups';
import auth from './auth';

export const reducers = combineReducers({ startups, auth });
