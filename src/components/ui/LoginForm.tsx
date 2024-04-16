import { LoginPayload } from "@/@types/auth";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Link, Title } = Typography;

type LoginFormProps = {
  onFinish: (payload: LoginPayload) => void;
};

function LoginForm({ onFinish }: LoginFormProps) {
  const navigate = useNavigate();
  const language = useLanguage();
  const [form] = Form.useForm();

  return (
    <Row gutter={[24, 36]} style={{ width: "clamp(200px, 100%, 500px)" }}>
      <Col span={24}>
        <Title level={4} style={{ textAlign: "center" }}>
          {language.welcomeBackAdventurer}
        </Title>
        <Form
          initialValues={{}}
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          {renderFormItems()}
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>{language.rememberMe}</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Flex align="center" justify="center" gap={10}>
              <Button type="primary" htmlType="submit">
                {language.login}
              </Button>
              {language.or}
              <Link onClick={() => navigate("/auth/register")}>
                {language.registerNewAccountTitle}
              </Link>
            </Flex>
          </Form.Item>
        </Form>
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
      placeholder: language.account,
      name: "username",
    },
    {
      prefix: <LockOutlined />,
      placeholder: language.password,
      name: "password",
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

export default LoginForm;
