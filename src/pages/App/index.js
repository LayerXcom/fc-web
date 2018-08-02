import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'

import './index.css'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import Crawl from '../../containers/Crawl'

const { Content } = Layout

class App extends Component {
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
            <Crawl />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
