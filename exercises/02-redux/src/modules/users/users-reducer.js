import * as UsersActions from './users-actions';

const INITIAL_STATE = {
  title: 'React is the best',
  users: [],
};

let id = 0
export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UsersActions.ADD_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: id++,
            ...payload,
          }
        ]
      };
    case UsersActions.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== payload),
      };
    default:
      return state;
  }
};
