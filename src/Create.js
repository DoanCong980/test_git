import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const CreatePage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form className = "createForm"
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Ten"
        name="Ten"
        rules={[
          {
            required: true,
            message: "Please input your ten!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="So dien thoai"
        name="So dien thoai"
        rules={[
          {
            required: true,
            message: "Please input your So dien thoai!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Dia chi"
        name="Dia chi"
        rules={[
          {
            required: true,
            message: "Please input your dia chi!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePage;
