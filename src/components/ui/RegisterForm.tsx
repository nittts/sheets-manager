import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Typography } from "antd";

import PasswordChecker from "./PasswordChecker";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { RegisterPayload } from "@/@types/auth";
import { useState } from "preact/hooks";

const { Title } = Typography;

type RegisterFormProps = { onFinish: (payload: RegisterPayload) => void };

function RegisterForm({ onFinish }: RegisterFormProps) {
  const language = useLanguage();
  const [form] = Form.useForm();
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
          {renderFormItems()}
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
          disabled={!valid && !!form.getFieldsError()}
          style={{ marginTop: "20px" }}
          onClick={() => form.submit()}
        >
          {language.register}
        </Button>
      </Col>
    </Row>
  );
}

function renderFormItems() {
  const language = useLanguage();
  const { errors } = language;

  const rules = [{ required: true, message: errors.required }];

  const formItems = [
    {
      prefix: <UserOutlined />,
      placeholder: language.nickname,
      name: "nickname",
    },
    {
      prefix: <UserOutlined />,
      placeholder: language.account,
      name: "username",
    },
    {
      prefix: <UserOutlined />,
      placeholder: language.nickname,
      name: "nickname",
    },
    {
      prefix: <LockOutlined />,
      placeholder: language.password,
      name: "password",
      type: "password",
    },
    {
      prefix: <LockOutlined />,
      placeholder: language.password,
      name: "confirmPassword",
      type: "password",
    },
  ];

  return formItems.map((opt) => (
    <Form.Item name={opt.name} rules={rules}>
      <Input
        size="large"
        variant="filled"
        prefix={opt.prefix}
        placeholder={opt.placeholder}
        type={opt?.type}
      />
    </Form.Item>
  ));
}

export default RegisterForm;
