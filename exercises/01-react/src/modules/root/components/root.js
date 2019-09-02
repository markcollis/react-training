import React from 'react';

import Header from 'modules/users/components/header';
import UsersList from 'modules/users/components/users-list';

let id = 0;

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  render() {
    return (
      <div>
        <Header title="User Management" />
        <UsersList
          users={this.state.users}
          addUser={this.addUser}
          removeUser={this.removeUser}
        />
      </div>
    )
  }

  addUser = (user) => {
    this.setState(({ users }) => ({ users: users.concat({ ...user, id: id++ }) }));
  }

  removeUser = (id) => {
    this.setState(({ users }) => ({ users: users.filter(user => user.id !== id) }));
  }
}

export default Root;
