import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { loadDefaultAccount } from '../../actions/web3'

import './index.css'

class Auth extends Component {
  static defaultProps = {
    initialized: false,
    logined: false
  }

  componentDidMount() {
    const { initialized, dispatch } = this.props
    if (!initialized) {
      dispatch(loadDefaultAccount())
    }
  }

  render() {
    const { logined } = this.props
    if (logined) {
      return <Redirect to={'/'} />
    }
    return (
      <div
        style={{
          padding: 24,
          minHeight: 360
        }}
      >
        <span> Please setup Metamask & Use local network!!</span>
      </div>
    )
  }
}

export default Auth
