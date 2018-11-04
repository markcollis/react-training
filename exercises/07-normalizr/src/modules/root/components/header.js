import React from 'react';
import PropTypes from 'prop-types';

import { inject, observer } from 'mobx-react';

const Header = ({ title }) => <h1>{title}</h1>;

// class Header extends React.Component {
//   render() {
//     console.log('Header.render');
//     return <h1>{this.props.title}</h1>;
//   }
// }

// class Header extends React.PureComponent {
//   render() {
//     console.log('Header.render');
//     return <h1>{this.props.title}</h1>;
//   }
// }

Header.propTypes = {
  title: PropTypes.string.isRequired
};

const mapStoreToProps = ({ store }) => ({
  title: store.user.title
});

export default inject(mapStoreToProps)(observer(Header));
