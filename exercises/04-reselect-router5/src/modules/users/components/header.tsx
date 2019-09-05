import React from 'react'
import { connect } from 'react-redux'

import { IState } from 'modules/root/root-reducer'
import { getTitle } from '../users-selectors'

interface HeaderStoreProps {
  title: ReturnType<typeof getTitle>
}

type HeaderProps = HeaderStoreProps

const Header: React.FC<HeaderProps> = ({ title }) => <h1>{title}</h1>

const mapStateToProps = (state: IState): HeaderStoreProps => ({
  title: getTitle(state),
})

export default connect(mapStateToProps)(Header)
