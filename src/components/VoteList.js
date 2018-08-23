import { List } from 'antd';
import React, { Component } from 'react'
import VoteButton from './VoteButton'

export default class VoteList extends Component{
  render(){
    const data=this.props.list
    return(
      <div>
        <List
          loadMore
          size="small"
          bordered
          dataSource={data}
          renderItem={item => (<List.Item>
            <p id='url'>{item}</p>
            <VoteButton id='VoteButton'/>
            </List.Item>)}
        />
      </div>
    )
  }
}
