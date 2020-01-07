import { combineReducers } from 'redux';

import { reducer as usersReducer } from 'modules/users/users-slice';

export default combineReducers({
  users: usersReducer,
});
