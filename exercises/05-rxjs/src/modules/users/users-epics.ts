import * as t from 'io-ts'
import { from, of } from 'rxjs'
import { filter, switchMap, mergeMap, map, catchError, tap } from 'rxjs/operators'
import { combineEpics, Epic } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'

import { Action, Actions } from 'modules/root/root-actions'
import { IState } from 'modules/root/root-reducer'
import createValidation from 'utils/validation'

const User = t.type({
  id: t.number,
  firstName: t.string,
  lastName: t.string,
})
const Users = t.array(User)
const userValidator = createValidation(User)
const usersValidator = createValidation(Users)

const loadUsers: Epic<Action, Action, IState> = (action$) =>
  action$.pipe(
    tap((a) => console.log(a)),
    filter(isActionOf(Actions.Users.loadUsers.request)),
    switchMap(() =>
      from(fetch('/users')).pipe(
        mergeMap(response => response.json()),
        map(usersValidator),
        map(Actions.Users.loadUsers.success),
        catchError((error: Error) => of(Actions.Users.loadUsers.failure(error))),
      ),
    ),
  )

const addUser: Epic<Action, Action, IState> = (action$) =>
  action$.pipe(
    filter(isActionOf(Actions.Users.addUser.request)),
    switchMap(({ payload }) => {
      console.log(payload)
      return from(fetch('/users', { method: 'POST', body: JSON.stringify(payload), headers: { 'Content-Type': 'application/json', } })).pipe(
        mergeMap(response => response.json()),
        map(userValidator),
        map(({ id }) => Actions.Users.addUser.success({ ...payload, id })),
        catchError((error: Error) => of(Actions.Users.addUser.failure(error))),
      )
    }),
  )

const removeUser: Epic<Action, Action, IState> = (action$) =>
  action$.pipe(
    filter(isActionOf(Actions.Users.removeUser.request)),
    switchMap(({ payload }) =>
      from(fetch(`/users/${payload}`, { method: 'DELETE' })).pipe(
        map(() => Actions.Users.removeUser.success(payload)),
        catchError((error: Error) => of(Actions.Users.removeUser.failure(error))),
      ),
    ),
  )

export default combineEpics(
  loadUsers,
  addUser,
  removeUser,
)
