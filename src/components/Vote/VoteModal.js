import { Modal, Button } from 'antd';
import React from 'react';

class VoteModal extends React.Component {
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
    return this.props.incTruth(this.props.id);
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    return this.props.incFake(this.props.id);
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
          <p>id:{this.props.id}</p>
          <p>URL:{this.props.url}</p>
          <p>Deposit: 1 FCT</p>
        </Modal>
      </div>
    );
  }
}

export default VoteModal
