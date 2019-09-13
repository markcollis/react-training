import { combineEpics } from 'redux-observable'
import userEpics from 'modules/users/users-epics'

export default combineEpics(
  userEpics,
)
