import React, { Component } from 'react';

export class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    handleClick = ({ firstName, lastName }) => {
        this.setState(prevState => ({
            users: [...prevState.users, {
                id: prevState.users.length + 1,
                firstName,
                lastName,
            }],
        }));
    }

    renderButton = ({ firstName, lastName }) => (
        <button
            className="button"
            onClick={() => this.handleClick({ firstName, lastName })}
        >
            {`${firstName} ${lastName}`}
        </button>
    )

    renderUserList = () => {
        const { users } = this.state;
        if (users.length === 0) return <p>No Users</p>;
        const renderUsers = users.map(({ id, firstName, lastName}) => (
            <li key={id}>{`${firstName} ${lastName}`}</li>
        ));
        return (
            <ul>{renderUsers}</ul>
        );
    }

    render() {
        return (
            <div>
                <p>Use the buttons to add some users:</p>
                {this.renderButton({ firstName: 'Arya', lastName: 'Stark'})}
                {this.renderButton({ firstName: 'Daenerys', lastName: 'Targaryen'})}
                <p>Current users:</p>
                {this.renderUserList()}
            </div>
        );
    }
}