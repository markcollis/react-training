import { combineReducers } from 'redux';

import { reducer as usersReducer } from '../users/users-slice';

export const rootReducer = combineReducers({
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>
