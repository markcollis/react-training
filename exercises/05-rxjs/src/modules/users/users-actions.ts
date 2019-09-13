import { createAsyncAction, ActionType } from 'typesafe-actions'
import { UserId, UserWithoutId, User } from './types'

export const Creators = {
  loadUsers: createAsyncAction('LOAD_USERS', 'LOAD_USERS_SUCCESS', 'LOAD_USERS_FAILURE')<void, User[], Error>(),
  addUser: createAsyncAction('ADD_USER', 'ADD_USER_SUCCESS', 'ADD_USER_FAILURE')<UserWithoutId, User, Error>(),
  removeUser: createAsyncAction('REMOVE_USER', 'REMOVE_USER_SUCCESS', 'REMOVE_USER_FAILURE')<UserId, UserId, Error>(),
}

export type Action = ActionType<typeof Creators>
