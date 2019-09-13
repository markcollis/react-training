import React from 'react'
import { connect } from 'react-redux'

import { Actions } from 'modules/root/root-actions'
import { IState } from 'modules/root/root-reducer'
import { getUsersList, isUsersLoading } from '../users-selectors'

import UserListItem from './users-list-item'

interface UsersListStoreProps {
  loading: ReturnType<typeof isUsersLoading>
  users: ReturnType<typeof getUsersList>
}

interface UsersListDispatchProps {
  addUser: typeof Actions.Users.addUser.request
  removeUser: typeof  Actions.Users.removeUser.request
}

type UsersListProps = UsersListStoreProps & UsersListDispatchProps

const UsersList: React.FC<UsersListProps> = ({ loading, users, addUser, removeUser }) => {
  const addAryaStark = () => addUser({ firstName: 'Arya', lastName: 'Stark' })
  const addDaenerysTargaryen = () => addUser({ firstName: 'Daenerys', lastName: 'Targaryen' })

  return loading
    ? <span>Loading...</span>
    : (
      <React.Fragment>
        <div>
          <button onClick={addAryaStark}>Add Arya Stark</button>
          <button onClick={addDaenerysTargaryen}>Add Daenerys Targaryen</button>
        </div>
        {users.length === 0
          ? <span>No Users</span>
          : (
            <ul>
              {users.map(user => (
                <li key={user.id}><UserListItem user={user} removeUser={removeUser} /></li>
              ))}
            </ul>
          )
        }
      </React.Fragment>
    )
}

const mapStateToProps = (state: IState): UsersListStoreProps => ({
  loading: isUsersLoading(state),
  users: getUsersList(state),
})

const mapDispatchToProps = {
  addUser: Actions.Users.addUser.request,
  removeUser: Actions.Users.removeUser.request,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
