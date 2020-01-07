import { usersActions } from './users-actions';

const initialState = {
    title: 'User Management Exercise #3',
    users: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case usersActions.Types.ADD_USER:
            return {
                ...state,
                users: [...state.users, {
                    id: state.users.length + 1,
                    ...action.payload,
                }],
            };
        default:
            return state;
    }
};
