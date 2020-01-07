import { createReducer } from 'reduxsauce';

import UsersActions from 'modules/users/users-actions';

const INITIAL_STATE = {
  title: 'React is the best',
  users: []
};

const handleAddUser = (state = INITIAL_STATE, { type, payload }) => ({
  ...state,
  users: [
    ...state.users,
    {
      id: state.users.length + 1,
      ...payload
    }
  ],
});

const HANDLERS = {
  [UsersActions.Types.ADD_USER]: handleAddUser,
};

export default createReducer(INITIAL_STATE, HANDLERS);

// original without reduxsauce below

// import UsersActions from 'modules/users/users-actions';

// const INITIAL_STATE = {
//   title: 'React is the best',
//   users: []
// };

// export default (state = INITIAL_STATE, { type, payload }) => {
//   switch (type) {
//     case UsersActions.Types.ADD_USER:
//       return {
//         ...state,
//         users: [
//           ...state.users,
//           {
//             id: state.users.length + 1,
//             ...payload
//           }
//         ]
//       };
//     default:
//       return state;
//   }
// };
