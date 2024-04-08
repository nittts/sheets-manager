import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Typography } from "antd";

import PasswordChecker from "./PasswordChecker";
import { useLanguage } from "@/providers/provider/LanguageProvider";

const { Title } = Typography;

function RegisterForm() {
  const language = useLanguage();
  const { errors } = language;

  const [form] = Form.useForm();
  const rules = [{ required: true, message: errors.required }];

  const password = Form.useWatch("password", form);
  const confirmPassword = Form.useWatch("confirmPassword", form);

  return (
    <Row gutter={[24, 36]}>
      <Col span={24}>
        <Title level={4} style={{ textAlign: "center" }}>
          {language.aNewHand}
        </Title>
        <Form initialValues={{}} form={form} layout="vertical">
          <Form.Item name="nickname" rules={rules}>
            <Input
              size="large"
              variant="filled"
              prefix={<UserOutlined />}
              placeholder={language.nickname}
            />
          </Form.Item>

          <Form.Item name="username" rules={rules}>
            <Input
              size="large"
              variant="filled"
              prefix={<UserOutlined />}
              placeholder={language.account}
            />
          </Form.Item>

          <Form.Item name="password" rules={rules}>
            <Input
              size="large"
              variant="filled"
              prefix={<LockOutlined />}
              type="password"
              placeholder={language.password}
            />
          </Form.Item>

          <Form.Item name="confirmPassword" rules={rules}>
            <Input
              size="large"
              variant="filled"
              prefix={<LockOutlined />}
              type="password"
              placeholder={language.confirmPassword}
            />
          </Form.Item>
        </Form>
      </Col>
      <Col span={24}>
        <PasswordChecker
          password={password}
          confirmPassword={confirmPassword}
        />
        <Button block type="primary" size="large" style={{ marginTop: "20px" }}>
          {language.register}
        </Button>
      </Col>
    </Row>
  );
}

export default RegisterForm;
