import { createStandardAction, ActionType } from 'typesafe-actions'
import { UserId, UserWithoutId } from './types'

export const Creators = {
  addUser: createStandardAction('ADD_USER')<UserWithoutId>(),
  removeUser: createStandardAction('REMOVE_USER')<UserId>(),
}

export type Action = ActionType<typeof Creators>
