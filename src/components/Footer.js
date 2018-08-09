import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

class MyFooter extends React.Component {
  render() {
    return (
      <Footer
        style={{
          textAlign: 'center'
        }}
      >
        Factchain ©2018 Created by Factchain team.
      </Footer>
    )
  }
}

export default MyFooter
