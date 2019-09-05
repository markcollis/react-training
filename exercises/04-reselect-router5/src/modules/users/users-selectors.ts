import { createSelector } from 'reselect'
import { IState } from 'modules/root/root-reducer'
import { UserId } from './types'

export const getState = (state: IState) => state.users

export const getTitle = createSelector(
  getState,
  (state) => state.title,
)

export const getUsers = createSelector(
  getState,
  (state) => state.users,
)

export const getUsersList = createSelector(
  getUsers,
  (users) => users.map(user => ({ ...user, lastName: user.lastName.toLocaleUpperCase() })),
)

export const createGetUser = () => createSelector(
  getUsers,
  (state: unknown, userId: UserId) => userId,
  (users, userId) => users.find(user => user.id === userId),
)
