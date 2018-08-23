import React, { Component } from 'react'
import './index.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import VoteList from '../VoteList'

export default class Vote extends Component {
  render() {
    return (
      <div>
        <div id='big-box'>
          <div id='list'>
            <p id='title'>直近提出されたURL</p>
            <VoteList list={this.props.urlList}/>
          </div>
          <div id='list'>
            <p id='title'>投票の多く集まっているURL</p>
            <VoteList list={this.props.urlList}/>
          </div>
        </div>
      </div>
    );
  }
}
