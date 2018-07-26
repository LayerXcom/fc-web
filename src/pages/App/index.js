import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd'
import { connect } from 'react-redux'

import './index.css'
import { getBalance } from '../../actions/web3'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

const { Content } = Layout

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getBalance())
  }

  render() {
    return (
      <Layout
        style={{
          minHeight: '100vh'
        }}
      >
        <Sidebar />
        <Layout>
          <Content
            style={{
              margin: '0 16px'
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0'
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                background: '#fff',
                minHeight: 360
              }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
