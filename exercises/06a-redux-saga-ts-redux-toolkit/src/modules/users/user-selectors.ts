import { createSelector } from 'reselect';

import { RootState } from '../root/root-reducer';

export const getUserState = ((state: RootState) => state.users);

export const getTitle = createSelector(getUserState, userState => userState.title);
export const getUsers = createSelector(getUserState, userState => userState.users);

export const getUsersList = createSelector(getUsers, users => users.map(user => ({
    ...user,
    lastName: user.lastName.toUpperCase(),
})));
