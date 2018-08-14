import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'

import './index.css'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import Crawl from '../../containers/Crawl'
import Vote from '../../containers/Vote'
import Factcheck from '../../containers/Factcheck'
import Stats from '../../containers/Stats'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'


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
            <Switch>
                <Route path='/crawl' exact component={Crawl} />
                <Route path='/vote' exact component={Vote} />
                <Route path='/factcheck' exact component={Factcheck} />
                <Route path='/stats' exact component={Stats}/>
            </Switch>
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

export default withRouter(connect(mapStateToProps)(App))
