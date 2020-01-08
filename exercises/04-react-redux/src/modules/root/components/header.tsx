import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../root/root-reducer';

type HeaderProps = ConnectedProps<typeof connector>;
const Header = ({ title }: HeaderProps) => <h1>{title}</h1>;

const mapStateToProps = (state: RootState) => ({
  title: state.users.title
});

const connector = connect(mapStateToProps);

export default connector(Header);
