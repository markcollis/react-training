import { createSlice } from '@reduxjs/toolkit';

type UserSliceState = {
    title: string,
    users: Array<{
      id: number,
      firstName: string,
      lastName: string
    }>
}

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        title: 'User Management Exercise: TS version',
        users: []
    } as UserSliceState,
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
