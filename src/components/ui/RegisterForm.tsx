import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Form, Input, Row } from "antd";

import PasswordChecker from "./PasswordChecker";

function RegisterForm() {
  const [form] = Form.useForm();

  const password = Form.useWatch("password", form);
  const confirm_password = Form.useWatch("confirm_password", form);

  return (
    <Row gutter={[24, 36]}>
      <Col span={24}>
        <Form initialValues={{ remember: true }} form={form} layout="vertical">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              size="large"
              variant="filled"
              prefix={<UserOutlined />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              size="large"
              variant="filled"
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              size="large"
              variant="filled"
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              size="large"
              variant="filled"
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </Form>
      </Col>
      <Col span={24}>
        <PasswordChecker
          password={password}
          confirm_password={confirm_password}
        />
      </Col>
    </Row>
  );
}

export default RegisterForm;
