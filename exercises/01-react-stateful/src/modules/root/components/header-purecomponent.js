import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class HeaderPureComponent extends PureComponent {
    render() {
        const { title } = this.props;
        return (
            <h1>{title}</h1>
        );
    }
}

HeaderPureComponent.propTypes = {
    title: PropTypes.string.isRequired,
};