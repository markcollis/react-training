import React from 'react'
import { connect } from 'react-redux'

import { IState } from 'modules/root/root-reducer'

interface HeaderStoreProps {
  title: string
}

type HeaderProps = HeaderStoreProps

const Header: React.FC<HeaderProps> = ({ title }) => <h1>{title}</h1>

const mapStateToProps = (state: IState): HeaderStoreProps => ({
  title: state.users.title,
})

export default connect(mapStateToProps)(Header)
