const ADD_USER = 'ADD_USER';

const addUser = user => ({
    type: ADD_USER,
    payload: user,
});

export const usersActions = {
    Types: { ADD_USER },
    Creators: { addUser },
};
