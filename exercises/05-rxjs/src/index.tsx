import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'
import { createEpicMiddleware } from 'redux-observable'

import Root from 'modules/root/components/root'
import rootReducer, { IState } from 'modules/root/root-reducer'
import rootEpic from 'modules/root/root-epics'
import router from './modules/root/router'
import { Action, Actions } from 'modules/root/root-actions'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

const epicMiddleware = createEpicMiddleware<Action, Action, IState>()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(epicMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (v: any) => v,
  ),
)

router.start(() => {
  epicMiddleware.run(rootEpic)
  store.dispatch(Actions.Users.loadUsers.request())

  ReactDOM.render(
    <RouterProvider router={router}>
      <Provider store={store}>
        <Root />
      </Provider>
    </RouterProvider>,
    document.getElementById('root'),
  )
})
