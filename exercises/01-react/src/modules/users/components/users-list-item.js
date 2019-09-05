import React from 'react';
import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
});

class User extends React.PureComponent {
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <span>{user.firstName} {user.lastName}</span>
        <button onClick={this.removeUser}>x</button>
      </React.Fragment>
    )
  }

  removeUser = () => {
    const { user, removeUser } = this.props;
    removeUser(user.id);
  }
}

User.propTypes = {
  user: UserShape.isRequired,
  removeUser: PropTypes.func.isRequired,
};

export default User;
