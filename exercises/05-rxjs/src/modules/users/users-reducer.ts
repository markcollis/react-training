import { getType } from 'typesafe-actions'
import { Reducer } from 'redux'
import { Creators, Action } from './users-actions'
import { User } from './types'

export interface UserState {
  title: string
  loading: boolean
  users: User[]
}

const INITIAL_STATE: UserState = {
  title: 'React is the best',
  loading: false,
  users: [],
}

const reducer: Reducer<UserState, Action> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case getType(Creators.loadUsers.request):
      return {
        ...state,
        loading: true,
      }
    case getType(Creators.loadUsers.success):
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    case getType(Creators.loadUsers.failure):
      return {
        ...state,
        loading: false,
        users: [],
      }
    case getType(Creators.addUser.success):
      return {
        ...state,
        users: [
          ...state.users,
          action.payload,
        ],
      }
    case getType(Creators.removeUser.success):
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      }
    default:
      return state
  }
}

export default reducer
