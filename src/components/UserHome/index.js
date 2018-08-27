import React, { Component } from 'react'
import './index.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import UrlList from '../Crawl/List'

export default class UserHome extends Component {
  render() {
    return (
      <div>
        <div id='big-box'>
          <div id='box'>
            <p id='title'>Crawl</p>
            <p>疑義のあるURLを提出する。</p>
            <Link to='/crawl'>
              <Button type="primary" id='button'>提出する</Button>
            </Link>
          </div>
          <div id='box'>
            <p id='title'>Vote</p>
            <p>疑義のあるURLに対して、FactかFakeか投票する。</p>
            <Link to='/vote'>
              <Button type="primary" id='button'>投票する</Button>
            </Link>
          </div>
          <div id='box'>
            <p id='title'>Factcheck</p>
            <p>提出されたURLに対してFactcheckした記事を提出する。</p>
            <Link to='/factcheck'>
              <Button type="primary" id='button'>提出する</Button>
            </Link>
          </div>
        </div>

        <div id='big-box'>
          <p id='title'>Reward</p>
          <p>TTL: {this.props.balance} FCT</p>
        </div>

        <div id='big-box'>
          <div id='list'>
            <p id='title'>直近提出されたURL</p>
            <UrlList list={this.props.urlList}/>
          </div>
          <div id='list'>
            <p id='title'>投票の多く集まっているURL</p>
            <UrlList list={this.props.sortList}/>
          </div>
        </div>
      </div>
    );
  }
}
