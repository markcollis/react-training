import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        title: 'React is the best',
        users: []
    },
    reducers: {
        addUser(state, action) {
            state.users.push({
                id: state.users.length + 1,
                ...action.payload,
            });
        }
    },
});

export const { addUser } = usersSlice.actions;
export const { reducer } = usersSlice;
