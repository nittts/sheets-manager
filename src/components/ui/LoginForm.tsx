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

  const rules = [{ required: true, message: language.errors.required }];

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
          <Form.Item name="account" rules={rules}>
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

export default LoginForm;
