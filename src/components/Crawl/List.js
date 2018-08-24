import { List } from 'antd';
import React, { Component } from 'react'

export default class UrlList extends Component{
  render(){
    const data=this.props.list
    return(
      <div>
        <List
          size="small"
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
              description={<div>id:{item.id} vote:{item.vote} truth:{item.truth} fake:{item.fake}</div>}
              />
              <div id='url'>url:{item.url}</div>
            </List.Item>)}
        />
      </div>
    )
  }
}
