# React Training Exercises

## Syllabus

https://docs.google.com/presentation/d/1XelIKN7_CupR6LcOp3FJl_zewp16qGM6ovcl9cX61A8/

## Exercises

* [Exercise \#1](#exercise-1)
* [Exercise \#2](#exercise-2)
* [Exercise \#3](#exercise-3)
* [Exercise \#4](#exercise-4)

### Exercise \#1

The main purpose of this exercise is to try [React](https://reactjs.org/docs/) and its [stateless components](https://reactjs.org/docs/components-and-props.html#functional-and-class-components) and [stateful components](https://reactjs.org/docs/react-component.html).

* Open the initial project `00-init`
* Install all dependencies with `yarn` or `npm i`
* Create two stateless components (`Header` and `UsersList`) which will render data with [functions](https://reactjs.org/docs/components-and-props.html#functional-and-class-components)
* Convert `Root` component into statefull component, which will hold the data and logic with [classes](https://reactjs.org/docs/react-component.html)

#### Header component

Location: `src/modules/users/components/header.js`

Props:

```ts
{
  title: string
}
```

This is the simplest component. It just renders a heading (`h1`) with a string taken from the `title` property.

* Create a function named `Header` that renders the heading. Heading comes from `title` property.
* Implement correct [`PropTypes`](https://reactjs.org/docs/typechecking-with-proptypes.html) in the `Header.propTypes`
  * `PropTypes` are in a separate library called `prop-types` and can be imported as

    ```js
    import PropTypes from 'prop-types';
    ```

* Use this component in the `Root` component

#### UsersList component

Location: `src/modules/users/components/users-list.js`

Props:

```ts
{
  users: Array<{
    id: number,
    firstName: string,
    lastName: string
  }>
  addUser: ({ firstName: string, lastName: string }) => void
  removeUser: (id: number) => void
}
```

This component renders a list of the users from property `users` and two buttons to add two different users.

* Create a function named `UsersList` that render two buttons and the list of users (or `No Users` when the list is empty)
* The first button will add `Arya Stark` and the second one `Daenerys Targaryen`
* For each user we render his/her name and button to delete that user (use `id` as key).

#### Root component

Location: `src/modules/root/components/root.js`

State:

```ts
{
  users: Array<{
    id: number,
    firstName: string,
    lastName: string
  }>
}
```

This component holds a list of the users in `this.state.users` and passes this list and handling functions into `UsersList` component.

* Create a class named `Users` that extends [`React.Component`](https://reactjs.org/docs/react-component.html)
* Implement method on class that accepts first and last name of user, generates id and uses [`this.setState`](https://reactjs.org/docs/react-component.html#setstate) to add a user
* Every user has `id` which should be unique within the list
* Implement method on class that accepts id of user and uses [`this.setState`](https://reactjs.org/docs/react-component.html#setstate) to remove a user
* Implement [`render`](https://reactjs.org/docs/react-component.html#render) method to render `Header` and `UsersList` component which accepts `users` list and `addUser` and `removeUser` methods
* Create the initial state inside the [`constructor`](https://reactjs.org/docs/react-component.html#constructor) of this component

#### Additional task

Try 3 different versions of the `Header` component and see when they get rendered

1. Created as a class that extends [`React.Component`](https://reactjs.org/docs/react-api.html#reactcomponent)
2. Created as a class that extends [`React.PureComponent`](https://reactjs.org/docs/react-api.html#reactpurecomponent)
3. Created as a [function](https://reactjs.org/docs/components-and-props.html#functional-and-class-components)

Do not render User data in list directly, but create separate component `User`, that will render data and delete button for particular user. (User list will now just render two add buttons and list of `User` components.)

### Exercise \#2

The main purpose of this exercise is to try [Redux](https://redux.js.org/) and [`react-redux`](https://github.com/reactjs/react-redux) binding.

* Continue with your previous project or open `01-react`
* Install all dependencies with `yarn` or `npm i` if you used `01-react`, otherwise install just `redux` and `react-redux`
  * `yarn add redux react-redux`, or
  * `npm i redux react-redux`
* Use [`Provider`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store) from `react-redux` instead of the manual re-rendering
* Move the logic into a reducer and write actions
* Connect `Header` and `UsersList` with the [`connect`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) function from `react-redux`

#### UsersActions

Location: `src/modules/users/users-actions.js`

This file defines actions and action types. (Later in the training, once we learn Typescript, we will use [`typesafe-actions`](https://github.com/piotrwitek/typesafe-actions) which will make things easier.)

* Create a constants ([action type](https://redux.js.org/basics/actions)) called `ADD_USER` with value `'ADD_USER'` and `REMOVE_USER` with value `'REMOVE_USER'`
* Create a functions ([action creator](https://redux.js.org/basics/actions#action-creators)) called `addUser` that returns an object with `type` (action type of `ADD_USER`) and `payload` (data supplied to function). The same for `removeUser` (with `type` of `REMOVE_USER`).

#### usersReducer

Location: `src/modules/users/users-reducer.js`

State:

```ts
{
  title: string,
  users: Array<{
    id: number,
    firstName: string,
    lastName: string
  }>
}
```

The logic (state and handling functions) from `Root` component from the previous exercise will be in this reducer.

* Create a [reducer](https://redux.js.org/basics/reducers) function
* Use an initial state
* Modify `users` field in the state when the `ADD_USER` action is dispatched
* Modify `users` field in the state when the `REMOVE_USER` action is dispatched
* Don't forget to return unmodified state when a different action is dispatched

#### rootReducer

Location: `src/modules/root/root-reducer.js`

This is the main reducer of the whole app. The main purpose is to combine all reducers from all modules into a single reducer.

* Import your `usersReducer`
* Use [`combineReducers`](https://redux.js.org/api-reference/combinereducers) from `redux` to create the root reducer

#### Index file

Location: `src/index.js`

Configure all necessary things for `redux`.

* Create `store` with the [`createStore`](https://redux.js.org/api-reference/createstore) function from `redux`
  * The first argument is `rootReducer`
  * The second argument can be an `enhancer`. Use the following to setup Redux devtools

    ```js
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : v => v
    ```

* Use [`Provider`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store) from `react-redux` to be able to connect components to store.

#### Header component

Location: `src/modules/root/components/header.js`

The same component with the same props like in the previous exercise.

* Use `connect` from `react-redux` to create the connected version of this component
* Set `title` inside `mapStateToProps`

#### UsersList component

Location: `src/modules/users/components/users-list.js`

The same component with the same props like in the previous exercise.

* Use `connect` from `react-redux` to create the connected version of this component
* Set `users` inside `mapStateToProps`
* Set `addUser` and `removeUser` inside `mapDispatchToProps`

#### Root component

Location: `src/modules/root/components/root.js`

* Remove all props and just render bare `Header` and `UsersList` because both components are connected now and will receive props directly from store.

### Exercise \#3

The main purpose of this exercise is to try [TypeScript](https://www.typescriptlang.org/docs/handbook/basic-types.html) and [`typesafe-actions`](https://github.com/piotrwitek/typesafe-actions).

* Continue with your previous project or open `02-redux`
* Install all dependencies with `yarn` or `npm i` if you used `02-redux`, otherwise install `typescript`, `typesafe-actions`, `@types/jest`, `@types/node`, `@types/react`, `@types/react-dom` and `@types/react-redux`
  * `yarn add typescript typesafe-actions @types/jest @types/node @types/react @types/react-dom @types/react-redux`, or
  * `npm i typescript typesafe-actions @types/jest @types/node @types/react @types/react-dom @types/react-redux`
* Rename all files to end with `ts` or `tsx`
* Rewrite action creators to use `typesafe-actions` and reducers to check with utils from `typesafe-actions`
* Add types to Components

#### UsersTypes

Location: `src/modules/users/types.ts`

Put here definition of types and interfaces used in users module

* Create type `UserId` which is alias to number type
* Create interface `UserWithoutId` which will contain string fields `firstName` and `lastName`
* Create interface `User` which will extend `UserWithoutId` and will add `id` field of `UserId` type

#### UsersActions

Location: `src/modules/users/users-actions.ts`

Redefine actions with `typesafe-actions`

* Delete constants
* Refactor `addUser` action creator to use [`createStandardAction`](https://github.com/piotrwitek/typesafe-actions#2-fsa-compliant-actions) and `UserWithoutId` type
* Refactor `removeUser` action creator to use `createStandardAction` and `UserId` type
* Export these action creators as one object named `Creators`
* Export `Action` type defined as type of `Creators` object.

#### RootActions

Location: `src/modules/root/root-actions.ts`

Create top level actions object and type covering all possible actions in app

* Export `Actions` object which will have property `Users` with all actions from `users-actions.ts`
* Export `Action` type defined as type of all possible actions.

#### usersReducer

Location: `src/modules/users/users-reducer.ts`

Add types

* Create interface `UserState` describing users state (use `User` type from `types.ts`)
* Type reducer function to use `Reducer` type from `redux`, state type will be `UserState` and action type `Action` from `root-actions.ts`
* rewrite switch cases to use [`getType`](https://github.com/piotrwitek/typesafe-actions#alternative-usage-with-regular-switch-reducer) from `typesafe-actions`

#### rootReducer

Location: `src/modules/root/root-reducer.ts`

Add types

* Create interface `IState` with `users` field of type `UserState`
* Add type hint to `combineReducers`

#### Header component

Location: `src/modules/root/components/header.tsx`

Add types

* Define `HeaderStoreProps` interface with `title` field of type `string`
* Define `HeaderProps` type as alias to `HeaderStoreProps`
* Type `Header` component as functional component with `HeaderProps` props
* Type `mapStateToProps` param and return value

#### UsersList component

Location: `src/modules/users/components/users-list.tsx`

Add types

* Define `UsersListStoreProps` interface with `users` field as array of type `User`
* Define `UsersListDispatchProps` interface with `addUser` and `removeUser` fields
* Define `UsersListProps` type as union of `UsersListStoreProps` and `UsersListDispatchProps`
* Type `UsersList` component as functional component with `UsersListProps` props
* Type `mapStateToProps` param and return value

#### Index file

Location: `src/index.tsx`

You need to hack global `Window` interface to be able to work with `__REDUX_DEVTOOLS_EXTENSION__`

* Just add

  ```ts
  declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION__: any
    }
  }
  ```

  after imports

#### Optionally

If you have created `users.ts` file, add types also to this component

### Exercise \#4

The main purpose of this exercise is to try [Reselect](https://github.com/reactjs/reselect) and [`router5`](http://router5.github.io/).

* Continue with your previous project or open `03-ts`
* Install all dependencies with `yarn` or `npm i` if you used `03-ts`, otherwise install just `reselect`, `router5`, `react-router5` and `router5-plugin-browser`
  * `yarn add reselect router5 react-router5 router5-plugin-browser`, or
  * `npm i reselect router5 react-router5 router5-plugin-browser`
* Create separate pages for users list, new user and user detail
* Create selectors and use them in `UsersList` and `UserDetail`

### UnreachableCaseError

Location: `src/utils/UnreachableCaseError.ts`

Error for describing states that can't occur thanks to TypeScript

* Create an class `UnreachableCaseError` extending Error which will accept argument `val` of type `never` and calls parent constructor with message `Unreachable case: ${JSON.stringify(val)}`

### RootRouteTypes

Location: `src/modules/root/router/root-route-types.ts`

Lists possible top level routes

* Create enumerator `RouteName` with just one field `Users`

### UserRouteTypes

Location: `src/modules/users/router/users-route-types.ts`

Lists possible top users routes

* Create enumerator `UserRouteName` with two field `List` and `Detail`
* Create constant `userIdParam`

### UsersRoutes

Location: `src/modules/users/router/users-routes.ts`

Define possible users [routes](https://router5.js.org/guides/defining-routes)

* Create constant `usersRoutes: Route[]` with two items
  * First item with name `UserRouteName.List`, path `/`,
  * Second item with name `UserRouteName.Detail`, path `/` with parameter named `userIdParam`,
* Export constant `usersDefaultRoute` which will be full route name of `UserRouteName.List`

### RootRoutes

Location: `src/modules/root/router/root-routes.ts`

Define possible root routes

* Create constant `routes: Route[]` with just one route with name `RouteName.Users`, path `/users`, children of user routes and `forwardTo` param with which will be full route name of `UserRouteName.List`

### Router

Location: `src/modules/root/router/index.ts`

Define router instance

* [Create router](https://router5.js.org/api-reference#createrouter) instance named `router` using root routes, `defaultRoute` option should be value of `RouteName.Users`
* Add `router5-plugin-browser` to browser

#### Index file

Location: `src/index.tsx`

Configure all necessary things for `router5`.

* Render app after router starts
* Use [`RouterProvider`](https://router5.js.org/integration/with-react#provider) to be able to use HOCs to get current route

### UsersSelectors

Location: `src/modules/users/users-selectors.ts`

* Create a selector called `getTitle` with [`createSelector`](https://github.com/reactjs/reselect#createselectorinputselectors--inputselectors-resultfunc) from `reselect`
  * This selector just returns the `title` string from the `state`
* Create a selector called `getUsers` with `createSelector`
  * This selector just returns the `users` array from the `state`
* Create a selector called `getUsersList` with `createSelector`
  * This selector uses the `getUsers` selector and modifies last names to upper case
* Create a selector creator called `createGetUser` with `createSelector`
  * This selector uses the `getUsers` selector and accepts second parameter of `userId: UserId` and returns user with that id

#### UsersRoute component

Location: `src/modules/users/components/users-route.tsx`

This component will be sign-post for users routes.

* Create functional component `UsersRoute` with `RouteContext` params from `react-router5/types/types`.
* It will render `Header` and `UsersList` or `UserDetail` (will create later) based on active route (`route.name.split('.')[1]`)
* Check for active route should be exhaustive, using `UnreachableCaseError`
* Wrap exported `UsersRoute` component with [`withRoute`](https://router5.js.org/integration/with-react#connecting-components) HOC

#### Root component

Location: `src/modules/root/components/root.tsx`

This component will be sign-post for top level routes.

* `Root` component now accepts `RouteContext` props
* It will render `UsersRoute` based on active route (`route.name.split('.')[0]`)
* Check for active route should be exhaustive, using `UnreachableCaseError`
* Wrap exported `Root` component with `withRoute`

### Header component

Location: `src/modules/root/components/header.tsx`

The same component with the same props like in the previous exercise.

* Use the `getTitle` selector in `mapStateToProps`

### UsersList component

Location: `src/modules/users/components/users-list.tsx`

The same component with the same props like in the previous exercise.

* Use the `getUsersList` selector in `mapStateToProps`

### UserDeatil component

Location: `src/modules/users/components/user-detail.tsx`

Component renders details of accessed user

* Create interface `UserDetailStoreProps` with `user` field, which is optional and of type `User`
* Create functional component `UserDetail` accepting `UserDetailProps`
* Component will render [`Link`](https://router5.js.org/integration/with-react#link-components) back to list of users and user details (`Not Found` if id in URL is invalid and user is not found in data)
* Component is wrapped with `withRoute` and `connect` HOCs
* Component will use selector created with `createGetUser` and as second parameter will use value of `userIdParam` read from active route

<!---
## Exercise \#6
The main purpose of this exercise is to try [Redux-Saga](https://redux-saga.js.org/), [`axios`](https://github.com/axios/axios), and [Express](http://expressjs.com/).

* Continue with your previous project or open `05-reselect`
* Install all dependencies with `yarn` or `npm i` if you used `05-reselect`, otherwise install the following dependencies
  * with `yarn`
    * `yarn add axios body-parser express redux-saga`
    * `yarn add -D concurrently nodemon`
  * or with `npm`
    * `npm i axios body-parser express redux-saga`
    * `npm i -D concurrently nodemon`
* Create a simple server that allows you to add a new user and get all users
* Move the logic of adding a new user to the server
* Create sagas that handle communication with the server

### package.json
Location: `package.json`

* Change the `start` script into the following
  * if you use `yarn`
    ```json
    "start": "concurrently \"yarn start-fe\" \"yarn start-be\"",
    "start-fe": "react-scripts start",
    "start-be": "nodemon src/server.js",
    ```
  * or if you use `npm`
    ```json
    "start": "concurrently \"npm run start-fe\" \"npm run start-be\"",
    "start-fe": "react-scripts start",
    "start-be": "nodemon src/server.js",
    ```
* Add `proxy` into the root to correctly handle CORS
  * `"proxy": "http://localhost:3001"`

### Server file
Location: `src/server.js`

A simple `express` server that has 2 routes `GET /users` and `POST /users`.

* Create a [server with `express`](http://expressjs.com/en/4x/api.html#app) and use [`body-parser`](https://github.com/expressjs/body-parser#expressconnect-top-level-generic) middleware (`bodyParser.json()`)
* Create the route `GET /users` that returns all users from the user list
  * Users can be stored in an array
* Create the route `POST /users` that
  * generates a new `id`
  * adds a new user into the user list (`firstName` and `lastName` can be taken from `req.body`)
  * returns the new user (`id` is included)

### API Client
Location: `src/modules/api/api-client.js`

This file contains an API client with `axios` that is used to make requests to the BE server.

* Use [`axios.create`](https://github.com/axios/axios#creating-an-instance) to create the client
* Set `baseURL: 'http://localhost:3000'` in the config

### UsersEffects
Location: `src/modules/users/users-effects.js`

This file defines all effect functions that perform the corresponding requests to API. We need only 2 effects right now - `getUsers` and `addUser`.

* Create a function `getUsers` that makes a request to `GET /users`
* Create a function `addUser` that makes a request to `POST /users` and sends an object with `firstName` and `lastName` in the request body

### UsersActions
Location: `src/modules/users/users-actions.js`

We will need a new action to store fetched users into to the state.

* Create a new action called `USERS_LOADED`

### usersReducer
Location: `src/modules/users/users-reducer.js`

Users are added on the BE side so the handler for the `ADD_USER` action is not necessary anymore. However, we need to handle the new `usersLoaded` action.

* Remove the `ADD_USER` action handler
* Add a handler for `USERS_LOADED`

### usersSaga
Location: `src/modules/users/users-saga.js`

This file is used to create [redux sagas](https://redux-saga.js.org/docs/api/) that handle side effects to communicate with the BE server. We need 2 sagas to handle all API effects we have - `getUsers` and `addUser`.

* Create a saga called `getUsers` that
  * calls `UsersEffects.getUsers`
  * dispatch the `USERS_LOADED` action with `data` taken from the response
* Create a saga called `addUser` that
  * calls `UsersEffects.addUser`
  * runs the `getUsers` saga to refresh the user list
* Don't forget to use `try/catch` in both sagas
* Create a saga called `usersSaga` (only this one needs to be exported - with `export default`) that
  * runs the `getUsers` saga immediately (we don't have a router currently)
  * runs the `addUser` saga when the `ADD_USER` action is dispatched (hint: use `takeEvery`)

### rootSaga
Location: `src/modules/root/root-saga.js`

This file simply starts all sagas that are needed in the whole application. Currently, we have only our own `usersSaga`.

* Create a saga (exported with `export default`) that runs `usersSaga` (hint: use `fork`)

### Index file
Location: `src/index.js`

Configure all necessary things for `redux-saga`.

* Create `sagaMiddleware` with a function [`createSagaMiddleware`](https://redux-saga.js.org/docs/api/) (default export from `redux-saga`)
* Change the second argument of `createStore` into the following where both functions ([`compose`](https://redux.js.org/api-reference/compose) and [`applyMiddleware`](https://redux.js.org/api-reference/applymiddleware) are imported from `redux`)
  ```js
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : v => v
  )
  ```
* Run your root saga with `sagaMiddleware.run(rootSaga)`


## Exercise \#7
The main purpose of this exercise is to try [`normalizr`](https://github.com/paularmstrong/normalizr).

* Continue with your previous project or open `06-redux-saga`
* This exercise uses [react-modules](https://github.com/salsita/react-modules) packages
  * If you used `06-redux-saga`, run `yarn` or `npm i` in the root of this repo
  * Otherwise, install dependencies with the following commands
    * with `yarn`
      * `yarn add normalizr roman-numerals @salsita/react-core @salsita/react-entities`
    * or with `npm`
      * `npm i normalizr roman-numerals @salsita/react-core @salsita/react-entities`
* Add skills and [regnal number](https://en.wikipedia.org/wiki/Regnal_number) to users
* Save users and skills into the entity repository in the denormalized form

### Server file
Location: `src/server.js`

The server adds skills and set the correct regnal number to every user.

The entity interfaces are
```ts
interface Skill {
  id: string; // e.g. skill-1
  name: string;
}

interface UsersSkill {
  skill: Skill;
  level: number;
}

interface User {
  id: string; // e.g. user-1
  firstName: string;
  lastName: string;
  regnalNumber: number; // use Arabic numerals
  skills: Array<UsersSkill>;
}
```

* Create few skills (use `string` ids for easier understanding of `normalizr`)
* When a new user is added
  * Set `id` of the user as a `string` (e.g. `user-1` instead of `1`)
  * Compute the correct regnal number for the user
  * Add some skills to the user where `level` is somehow based on the regnal number (it doesn't matter what equation you use - it can be for example `level = 3 * regnalNumber`)

### rootReducer
Location: `src/modules/root/root-reducer.js`

The `@salsita/react-entities` library uses Redux so it's necessary to add its reducer into our root reducer.

* Import `import { entitiesReducer as entities } from '@salsita/react-entities';`
* Add `entities` into the root reducer

### Entities Schema
Location: `src/modules/entities/entities-schema.js`

This file contains [`normalizr` schema](https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#schema) of our entities.

* Create schema for `Skill`, `UsersSkill`, and `User` [entities](https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#entitykey-definition---options--)
* If an entity doesn't have the `id` field, you need to specify one with `idAttribute`, which can be a `string` (name of the `id` field) or a function that creates the value of `id` field

### usersSaga
Location: `src/modules/users/users-saga.js`

Currently, the same denormalized data that comes from the BE server are stored in the state. We need to normalize the data from response and store them in the entity repository.

* Import `import { normalizeAndStore } from '@salsita/react-entities';`
* Call `normalizeAndStore(data, schema)` and save the result (an array of `id`s) in the `usersReducer`

### usersReducer
Location: `src/modules/users/users-reducer.js`

State:
```ts
{
  title: string,
  userIds: number[]
}
```

* Update this reducer to store `userIds` instead of `users`

### UsersActions
Location: `src/modules/users/users-actions.js`

* Update the payload variable into `userIds`

### EntitiesSelectors
Location: `src/modules/entities/entities-selectors.js`

Since data are stored in the normalized form in the state, we need to denormalize them for easier access to values.

* Create 3 selectors (`getUsers`, `getSkills`, and `getUsersSkills`) that return the corresponding entities in the denormalized form

### UsersSelectors
Location: `src/modules/users/users-selectors.js`

The `usersReducer` does not store the entity data, it stores `id`s only.

* Create a new selector called `getUserIds` that returns `id`s from the redux state
* Modify the `getUsers` selector to map users `id`s from the `usersReducer` into denormalized users
* Modify the `getUsersList` selector to return the users with
  * upper cased last names
  * converted regnal number into Roman numerals (use the [`roman-numerals`](https://github.com/joshleaves/roman-numerals) library)

### UsersList component
Location: `src/modules/users/components/users-list.js`

Props:
```ts
{
  users: Array<{
    id: string,
    firstName: string,
    lastName: string,
    regnalNumber: string
  }>,
  addUser: ({ firstName: string, lastName: string }) => void
}
```

* Print `regnalNumber` next to the first name


## Exercise \#8
The main purpose of this exercise is to try [`router5`](http://router5.github.io/) and `@salsita/react-crud`.

* Continue with your previous project or open `07-normalizr`
* This exercise uses [react-modules](https://github.com/salsita/react-modules) packages
  * If you used `07-normalizr`, run `yarn` or `npm i` in the root of this repo
  * Otherwise, install dependencies with the following commands
    * with `yarn`
      * `yarn add react-portal router5-helpers @salsita/react-api @salsita/react-crud @salsita/react-router`
    * or with `npm`
      * `npm i react-portal router5-helpers @salsita/react-api @salsita/react-crud @salsita/react-router`
* Create a page for user detail (e.g. at `/users/user-1`)
* Use `@salsita/react-crud` to automate entity fetching

### Server file
Location: `src/server.js`

Add a route to fetch a single user.

* Add a route for `GET /users/:id` and return the corresponding user in the response

### rootReducer
Location: `src/modules/root/root-reducer.js`

We need to add all required reducers into the root reducer.

* Import `import { apiReducer as api } from '@salsita/react-api';`
* Import `import { crudReducer as crud } from '@salsita/react-crud';`
* Import `import { routerReducer as router } from '@salsita/react-router';`
* Add all three reducers into the root reducer

### Routes
Location: `src/router/routes.js`

This file contains names and configuration of routes.

* Create 2 routes
  * `const USERS_LIST = 'users'` for the list of all users
  * `const USER_DETAIL = 'users.detail'` for the detail page (with `id` parameter)

### Index file
Location: `src/index.js`

Use `buildRouter` and `buildStore` functions for easier configuration of `redux`, `router5`, and `redux-saga`.

* Import `import { buildRouter } from '@salsita/react-router';`
* Import `import { buildStore } from '@salsita/react-core';`
* Create a router with the `buildRouter(routes, options)` function
  * You can specify the `defaultRoute` in the `options` argument
* Create the redux store with the `buildStore(rootReducer, rootSaga, router)` function
* Start the router

### UserDetail component
Location: `src/modules/users/components/user-detail.js`

Props:
```ts
{
  userDetail: {
    firstName: string,
    lastName: string,
    regnalNumber: string,
    skills: Array<{
      skill: {
        name: string
      },
      level: number
    }>
  }
}
```

This component displays a user detail with skills information.

* Create `UserDetail` that displays the data

### UsersRoute component
Location `src/modules/users/components/users-route.js`

Props:
```ts
{
  route: {
    name: string
  }
}
```

This component takes care about the proper routing in the users module.

* Render the `UserDetail` component if the current route ends with `detail` (hint: use `endsWithSegment` from [`router5-helpers`](https://github.com/router5/router5/tree/master/packages/router5-helpers))
* Otherwise, render the `UsersList` component

### UsersList component
Location: `src/modules/users/components/users-list.js`

We need to add links to the detail page. Navigate to the detail page when the user clicks on the first name.

* Import `import { Link } from '@salsita/react-router';`
* Use the `Link` component and set `name` and `params` props on it

### Root component
Location: `src/modules/root/components/root.js`

Use the `Route` component from `@salsita/react-router` for easier routing. You can also use `ApiErrorToast` and `ApiLoader` to display a basic error toast and loading spinner. The data for both components are automatically stored in the state from `@salsita/react-api`.

* Import `import { Route } from '@salsita/react-router';`
* Use the `Route` component instead of `UsersList` and set `startsWith` and `component` props on it
* Import `import { ApiErrorToast, ApiLoader } from '@salsita/react-api';`
* Use `Portal` from `react-portal` to render `ApiErrorToast` and `ApiLoader`

### CRUD Saga file
Location: `src/modules/crud/crud-saga.js`

This file contains two important functions for the CRUD module - `mapEntityToSaveParams` and `mapRouteToFetchParams`. Both of them return params that are used for saving or fetching entities.

* Create a function called `mapEntityToSaveParams(entity, isUpdate)` that
  * has the following arguments
    * `entity` is a `string` that describes the name of the entity currently being saved
    * `isUpdate` is a `boolean` flag to distinguish between create and update
  * returns the following object
    ```ts
    {
      effect: (data: any) => void, // an effect to save the entity
      schema: Schema // a schema from normalizr
    }
    ```
* Create a function called `mapRouteToFetchParams(route)` that
  * receives the name of the current route
  * returns the following object
    ```ts
    {
      [identifier]: { // this can be any string that identifies the fetched data
        effect: (...effectParams: any) => data, // an effect to fetch the entity
        schema: Schema // a schema from normalizr
        effectParamsFactory: (state: RootState) => any[] // the result is used for effectParams
      }
    }
    ```

### CRUD Entities
Location: `src/modules/crud/crud-entities.js`

This file has only string constants with entity names for `mapEntityToSaveParams`

* Create a constant for `USER` entity

### CrudSelectors
Location: `src/modules/crud/crud-selectors.js`

The CRUD module takes care about automatic storing of entity `id`s. Since the `id`s won't be in the `usersReducer` anymore, we need to slightly update `UsersSelectors` and move them into `CrudSelectors`.

* Create the following selectors that read the data from CRUD and Entities modules
  * `getUsersList`
  * `getUserDetail`

### UsersSelectors
Location: `src/modules/users/users-selectors.js`

* Update the `getUsersList` selector (hint: use `CrudSelectors`)

### rootSaga
Location: `src/modules/root/root-saga.js`

Start `crudSaga` to automatically fetch entities.

* Import `import { crudSaga } from '@salsita/react-crud';`
* Start `crudSaga` (it needs `mapRouteToFetchParams` as an argument)

### UsersEffects
Location: `src/modules/users/users-effects.js`

We need a new effect to fetch a single user. Also, we should use `wrapApiCall` from `@salsita/react-api` for proper error handling.

* Import `import { wrapApiCall } from '@salsita/react-api';`
* Wrap all effects with `wrapApiCall(effect)`
* Add a new effect called `getUser`

### usersSaga
Location: `src/modules/users/users-saga.js`

The CRUD module handles entity fetching so we don't need the `getUsers` saga anymore. Use the `saveEntity` saga from `@salsita/react-crud` for better error handling and `fetchEntities` to refresh the user list.

* Call the `saveEntity(data, entity, mapEntityToSaveParams)` saga (instead of the direct effect call) that
  * has the following arguments
    * `data` is an object that is sent to the BE server
    * `entity` is a `string` that describes the name of the entity currently being saved
    * `mapEntityToSaveParams` is a function that defines defines save params (`effect` and `schema`) to use
  * returns the response from the server (you don't have to use `.data` field)
* Call the `fetchEntities(route, mapRouteToFetchParams)` saga (to refresh the user list) that
  * has the following arguments
    * `route` is the name of the route you want to refresh
    * `mapRouteToFetchParams` is a function that defines fetch params (`effect` and `schema`) to use

### UsersActions
Location: `src/modules/users/users-actions.js`

We don't need the `USERS_LOADED` action anymore.

* Delete the `usersLoaded` action creator

### usersReducer
Location: `src/modules/users/users-reducer.js`

State:
```ts
{
  title: string
}
```

* Delete the unused `usersLoaded` action handler


## Exercise \#9
The main purpose of this exercise is to try [Redux Form](https://redux-form.com/).

* Continue with your previous project or open `08-router5`
* This exercise uses [react-modules](https://github.com/salsita/react-modules) packages
  * If you used `08-router5`, run `yarn` or `npm i` in the root of this repo
  * Otherwise, install dependencies with the following commands
    * with `yarn`
      * `yarn add redux-form @salsita/react-forms`
    * or with `npm`
      * `npm i redux-form @salsita/react-forms`
* Create forms for creating and updating users

### Server file
Location: `src/server.js`

Add routes that updates a user and fetches skills. Modify the route that saves a new user.

* Add a route for `PATCH /users/:id` that updates the user and returns the updated user in the response
* Add a route for `GET /skills` that returns all skills
* Modify the route `POST /users/:id` and add `skills` field into the request body

### rootReducer
Location: `src/modules/root/root-reducer.js`

We need to add the `form` reducer into the root reducer.

* Import `import { formsReducer as form } from '@salsita/react-forms';`
* Add the `form` reducer into the root reducer

### Routes
Location: `src/router/routes.js`

* Create a new route `const USER_CREATE = 'users.create'` for the form that creates a new user

### UsersEffects
Location: `src/modules/users/users-effects.js`

We need new effects to update a user and fetch all skills.

* Add a new effect called `updateUser`
* Add a new effect called `getSkills`

### UsersActions
Location: `src/modules/users/users-actions.js`

Currently, we have only one action called `ADD_USER` that is dispatched when a user clicks on one of the buttons. Since we will use this action to create or update a user, let's rename it to `SAVE_USER`.

* Rename the `ADD_USER` action to `SAVE_USER`

### CRUD Saga file
Location: `src/modules/crud/crud-saga.js`

We will need a list of all skills to display them in the create/edit form. We also have a new effect called `updateUser` so we can use it in `mapEntityToSaveParams`.

* Fetch `skills` in the `USERS_LIST` route
* Add the `updateUser` effect into `mapEntityToSaveParams` (hint: use the `isUpdate` argument to distinguish between create and update)

### CrudSelectors
Location: `src/modules/crud/crud-selectors.js`

* Add a selector called `getSkills`

### UserForm component
Location: `src/modules/users/components/user-form.js`

This [form component](https://redux-form.com/7.3.0/docs/api/reduxform.md/) has fields for `firstName`, `lastName`, and `skills` where a single user can have multiple `skills`.

* Use `FormField` from `@salsita/react-forms` for
  * `firstName`
  * `lastName`
* Use `FormFieldSelect` from `@salsita/react-forms` for `skills`
* Since a user can have multiple skills, implement adding and deleting of skills with the [`FieldArray`](https://redux-form.com/7.3.0/docs/api/fieldarray.md/) component from `redux-form`
* Implement the following [field-level](https://redux-form.com/7.3.0/examples/fieldlevelvalidation/) validations
  * `firstName` cannot be an empty string
  * `lastName` cannot be an empty string
  * `skills` cannot be empty and must be unique
* You can use some validation functions from `@salsita/react-forms`

### UserCreate component
Location: `src/modules/users/components/user-create.js`

Props:
```ts
{
  saveUser: (formData: object) => void
}
```

This component just renders the `UserForm` component to create a new user.

### UserDetail component
Location: `src/modules/users/components/user-detail.js`

Props:
```ts
{
  userDetail: {
    firstName: string,
    lastName: string,
    regnalNumber: string,
    skills: Array<{
      skill: {
        name: string
      },
      level: number
    }>
  },
  saveUser: (formData: object) => void
}
```

This component just renders the `UserForm` component with `initialValues` to edit a user.

### UsersList component
Location: `src/modules/users/components/users-list.js`

Props:
```ts
{
  users: Array<{
    id: number,
    firstName: string,
    lastName: string,
    regnalNumber: string
  }>
}
```

* Remove both buttons
* Add a `Link` to the `USERS` page

### UsersRoute component
Location `src/modules/users/components/users-route.js`

We want to display the `UserCreate` component in a modal dialog while the users list is shown in the background.

* Render both `UsersList` and `UserCreate` on the `create` route
* Use `Portal` to put the `UserCreate` component in the modal dialog

### usersSaga
Location: `src/modules/users/users-saga.js`

There are couple of things we need to update in our sagas.

* Currently, our saga handles update as well so it is good to rename it to `saveUser` since the new name of the action that starts the saga is `SAVE_USER`.
  * Update names of the action and saga
* Since the `saveUser` saga can be called from two routes now (`USERS_LIST` and `USER_DETAIL`), we want to redirect the user into `USERS_LIST` route after the successful submission.
  * Import `import { RouterActions } from '@salsita/react-router';`
  * Use the `RouterActions.Creators.navigateTo(routeName)` action to perform the redirect
* Since we use forms for creating and updating users, we should add the 4th argument to the `saveEntity` saga, which is the name of the form that was submitted
