import { combineReducers } from 'redux'

import users, { UserState } from 'modules/users/users-reducer'

export interface IState {
  users: UserState
}

export default combineReducers<IState>({
  users,
})
