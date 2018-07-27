import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { loadDefaultAccount } from '../../actions/web3'

import './index.css'

class Auth extends Component {
  state = {
    initialized: false,
    account: ''
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadDefaultAccount())
  }

  render() {
    const { initialized, account } = this.props
    if (initialized && !account) {
      return <Redirect to={'/login'} />
    }
    if (initialized) {
      return <div> {this.props.children} </div>
    }
    return (
      <div
        style={{
          padding: 24,
          minHeight: 360
        }}
      >
        Loading...
      </div>
    )
  }
}

export default Auth
