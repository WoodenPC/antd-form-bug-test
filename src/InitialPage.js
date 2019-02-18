import React from "react";
import {
  Form, Icon, Input, Button, Checkbox, Tabs
} from 'antd';
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .login-form-button {
    width: 100%;
  }
`;

const TabPane = Tabs.TabPane;

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Wrapper>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Authorization" key="1">
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please enter your name' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="User name" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please enter password' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember</Checkbox>
                )}
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Sign in
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Register" key="2">
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please enter your name' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="User name" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please enter your password' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </Form.Item>
              <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Sign up
              </Button>
              </Form.Item>
            </Form>
            </TabPane>
        </Tabs>
      </Wrapper>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default(WrappedLoginForm);