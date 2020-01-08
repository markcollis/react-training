import { createSlice } from '@reduxjs/toolkit';

type UserData = {
    firstName: string,
    lastName: string
}

type UserSliceState = {
    title: string,
    users: Array<{ id: number } & UserData>
}

const initialState: UserSliceState = {
    title: 'User Management Exercise: TS version',
    users: [],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action: { payload: UserData}) {
            state.users.push({
                id: state.users.length + 1,
                ...action.payload,
            });
        }
    },
});

export const { addUser } = usersSlice.actions;
export const { reducer } = usersSlice;
