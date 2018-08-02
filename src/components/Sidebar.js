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
          <Menu.Item key="0">
            <Link to="/">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/crawl">
              <Icon type="file-text" />
              <span>Crawl</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/vote">
              <Icon type="tags-o" />
              <span>Vote</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/factcheck">
              <Icon type="form" />
              <span>Factcheck</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/stats">
              <Icon type="pie-chart" />
              <span>Stats</span>
            </Link>
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
