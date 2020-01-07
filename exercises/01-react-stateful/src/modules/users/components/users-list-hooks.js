import React, { useState } from 'react';

export const UsersListHooks = () => {
  const [ users, setUsers ] = useState([]);
  
  const addUser = user => {
    setUsers([...users, {
      id: users.length + 1,
      ...user,
    }]);
  };
  
  const addArya = () => addUser({ firstName: 'Arya', lastName: 'Stark' });
  const addDaenerys = () => addUser({ firstName: 'Daenerys', lastName: 'Targaryen' });

  return (
    <div>
      <div>
        <button onClick={addArya}>Add No One</button>
        <button onClick={addDaenerys}>Add Mother of Dragons</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {!users.length && (
            <tr colSpan="2">
              <td>No Users</td>
            </tr>
          )}
          {users.map(({ id, firstName, lastName }) => (
            <tr key={id}>
              <td>{firstName}</td>
              <td>{lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
