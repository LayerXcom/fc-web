import React, { Component } from 'react'

import './index.css'

export default class Crawl extends Component {
  render() {
    const list = this.props.urlList.map((url, index) => <li key={index}>{url}</li>)

    return (
      <div
        style={{
        padding: 24,
        minHeight: 360
        }}
      >
        Please submit suspicious URL!!!
        <div>
          <input type="text" ref="url" />
          <button onClick={() => this.props.addUrl(this.refs.url.value)}>submit</button><br />
        </div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}
