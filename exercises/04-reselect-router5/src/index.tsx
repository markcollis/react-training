import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'

import Root from 'modules/root/components/root'
import rootReducer from 'modules/root/root-reducer'
import router from './modules/root/router'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : v => v,
)

router.start(() =>
  ReactDOM.render(
    <RouterProvider router={router}>
      <Provider store={store}>
        <Root />
      </Provider>
    </RouterProvider>,
    document.getElementById('root'),
  )
)
