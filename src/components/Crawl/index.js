import React, { Component } from 'react'
import SubmitModal from './SubmitModal'
import UrlList from './List'

import './index.css'

export default class Crawl extends Component {
  render() {
    return (
      <div>
        <div id='crawl-list'>
          <p id='big-title'>URLを提出する</p>
          <div id='small-title'>
            URL
          </div>
          <div>
            <input type="text" ref="url" id='wide-size' onChange={(e) => {this.props.submittingUrl(e)}}/>
            <SubmitModal onClick={() => {this.props.addUrl(this.refs.url.value)}} url={this.props.url}/>
          </div>
        </div>
        <div id='crawl-list'>
          <ul>
            <p id='big-title'>自分が提出したURL</p>
            <UrlList list={this.props.urlList}/>
          </ul>
        </div>
      </div>
    );
  }
}
