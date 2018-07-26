import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

const { Sider } = Layout

class Sidebar extends React.Component {
  state = {
    sidebarCollapsed: false
  }

  render() {
    return (
      <Sider collapsible="collapsible" collapsed={this.state.sidebarCollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Link to="/hoge">
              <Icon type="pie-chart" />
              <span>Crawl</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Vote</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="desktop" />
            <span>Factcheck</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="desktop" />
            <span>Stats</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="github" />
            <span>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/factchain"
              >
                Github
              </a>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default Sidebar
