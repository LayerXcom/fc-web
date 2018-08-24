import React, { Component } from 'react'
import './index.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import VoteList from './VoteList'
import SortList from './SortList'

export default class Vote extends Component {
  render() {
    return (
      <div>
        <div id='big-box'>
          <div id='list'>
            <p id='title'>直近提出されたURL</p>
            <VoteList list={this.props.urlList} incTruth={(id) => {this.props.incTruth(id)}} incFake={(id) => {this.props.incFake(id)}}/>
          </div>
          <div id='list'>
            <p id='title'>投票の多く集まっているURL</p>
            <VoteList list={this.props.sortList} incTruth={(id) => {this.props.incTruth(id)}} incFake={(id) => {this.props.incFake(id)}}/>
          </div>
        </div>
      </div>
    );
  }
}
