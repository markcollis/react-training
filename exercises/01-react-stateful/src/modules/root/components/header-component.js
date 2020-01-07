import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class HeaderComponent extends Component {
    render() {
        const { title } = this.props;
        return (
            <h1>{title}</h1>
        );
    }
}

HeaderComponent.propTypes = {
    title: PropTypes.string.isRequired,
};