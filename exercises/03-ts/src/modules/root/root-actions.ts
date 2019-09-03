import { ActionType } from 'typesafe-actions'
import { Creators as UsersActionCreators }  from 'modules/users/users-actions'

export const Actions = {
  Users: UsersActionCreators,
}

export type Action = ActionType<typeof Actions>
