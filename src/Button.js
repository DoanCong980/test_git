import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Modal, Button } from "antd";

class ButtonDelete extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Delete
        </Button>
        <Modal
          visible={visible}
          title="Thong bao"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Ok
            </Button>,
          ]}
        >
          <p>Xoa thanh cong</p>
        </Modal>
      </>
    );
  }
}

export default ButtonDelete;
