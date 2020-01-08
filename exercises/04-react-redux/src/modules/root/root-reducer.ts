import { combineReducers } from 'redux';

import users from '../users/users-reducer';

export const rootReducer = combineReducers({
  users
});

export type RootState = ReturnType<typeof rootReducer>
