import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Header extends Component {
    render() {
        const { title } = this.props;
        return (
            <h1>{title}</h1>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};