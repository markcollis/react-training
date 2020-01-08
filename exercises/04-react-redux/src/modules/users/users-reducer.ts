import { createReducer, Handlers } from 'reduxsauce';

import UsersActions from './users-actions';

type UserState = {
  title: string,
  users: Array<{
    id: number,
    firstName: string,
    lastName: string
  }>
}

type AddUserAction = {
  type: typeof UsersActions.Types.ADD_USER,
  user: {
    firstName: string,
    lastName: string,
  },
}

const INITIAL_STATE: UserState = {
  title: 'React is the best',
  users: []
};

const addUser = (state: UserState, action: AddUserAction) => ({
  ...state,
  users: [
    ...state.users,
    {
      id: state.users.length + 1,
      ...action.user,
    }
  ]
});

const HANDLERS: Handlers<UserState, AddUserAction> = {
  [UsersActions.Types.ADD_USER]: addUser
};

export default createReducer(INITIAL_STATE, HANDLERS);
