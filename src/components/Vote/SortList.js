import { List } from 'antd';
import React, { Component } from 'react'
import VoteModal from './VoteModal'

import './index.css'

export default class SortList extends Component{
  render(){
    var data=this.props.list;
    return(
      <div>
        <List
          loadMore
          size="small"
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item id='listI'>
              <List.Item.Meta
              description={<div>id:{item.id} vote:{item.vote} truth:{item.truth} fake:{item.fake}</div>}
              />
              <div id='url'>url:{item.url}</div>
              <VoteModal id='VoteModal' id={item.id} url={item.url}  incTruth={(id) => {this.props.incTruth(id)}} incFake={(id) => {this.props.incFake(id)}}/>
            </List.Item>)}
        />
      </div>
    )
  }
}
