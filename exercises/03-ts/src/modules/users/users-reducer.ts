import { getType } from 'typesafe-actions'
import { Reducer } from 'redux'
import { Creators, Action } from './users-actions'
import { User } from './types'

export interface UserState {
  title: string
  users: User[]
}

const INITIAL_STATE: UserState = {
  title: 'React is the best',
  users: [],
}

let id = 0
const reducer: Reducer<UserState, Action> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case getType(Creators.addUser):
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: id++,
            ...action.payload,
          }
        ]
      }
    case getType(Creators.removeUser):
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      }
    default:
      return state
  }
}

export default reducer
