import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../root-reducer';

import { getTitle } from '../../users/user-selectors';

type HeaderProps = ConnectedProps<typeof connector>;
const HeaderInner = ({ title }: HeaderProps) => <h1>{title}</h1>;

const mapStateToProps = (state: RootState) => ({
  title: getTitle(state),
});

const connector = connect(mapStateToProps);

export const Header = connector(HeaderInner);
