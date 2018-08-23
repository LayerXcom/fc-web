import { Modal, Button } from 'antd';
import React from 'react';

class VoteButton extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    return this.props.onClick();
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>投票する</Button>
        <Modal
          title=""
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Truth"
          cancelText="Fake"
        >
          <p>地球は平面である</p>
          <p>Deposit: 1 FCT</p>
        </Modal>
      </div>
    );
  }
}

export default VoteButton
