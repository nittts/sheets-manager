import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Typography } from "antd";

import PasswordChecker from "./PasswordChecker";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { RegisterPayload } from "@/@types/auth";
import { useState } from "preact/hooks";

const { Title } = Typography;

type RegisterFormProps = {
  onFinish: (payload: RegisterPayload) => void;
};

function RegisterForm({ onFinish }: RegisterFormProps) {
  const language = useLanguage();
  const { errors } = language;

  const [form] = Form.useForm();
  const rules = [{ required: true, message: errors.required }];

  const password = Form.useWatch("password", form);
  const confirmPassword = Form.useWatch("confirmPassword", form);

  const [valid, setValid] = useState(false);

  return (
    <Row gutter={[24, 36]}>
      <Col span={24}>
        <Title level={4} style={{ textAlign: "center" }}>
          {language.aNewHand}
        </Title>
        <Form
          initialValues={{}}
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
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
          isValid={(valid) => setValid(valid)}
        />
        <Button
          block
          type="primary"
          size="large"
          disabled={!valid}
          style={{ marginTop: "20px" }}
          onClick={() => form.submit()}
        >
          {language.register}
        </Button>
      </Col>
    </Row>
  );
}

export default RegisterForm;
