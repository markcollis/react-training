import { createSlice } from '@reduxjs/toolkit';

// import { getUsersEffect, addUserEffect } from './users-effects'

export type UserData = {
    firstName: string,
    lastName: string
}

export type UserDataWithId = { id: number } & UserData;

type UserSliceState = {
    title: string,
    users: Array<UserDataWithId>
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
            console.log('addUser reducer triggered');
            // state.users.push({
            //     id: state.users.length + 1,
            //     ...action.payload,
            // });
            // testing effects
            // console.log('testing effects');
            // getUsersEffect().then(response => console.log(response));
            // addUserEffect({ firstName: 'test', lastName: 'user' }).then(response => console.log(response));
        },
        usersLoaded(state, action: { payload: Array<UserDataWithId> }) {
            state.users = action.payload;
        }
    },
});

export const { addUser, usersLoaded } = usersSlice.actions;
export const { reducer } = usersSlice;
