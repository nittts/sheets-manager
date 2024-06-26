import { LoginPayload } from "@/@types/auth";
import GoBackButton from "@/components/ui/GoBackButton";
import LoginForm from "@/components/ui/Form/Form.login";
import MenuHeader from "@/components/ui/MenuHeader";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { loginSvc } from "@/services/auth";
import { FeedbackUtils } from "@/utils/feedback";
import { Card, Col, Flex, Row } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const language = useLanguage();

  const onFinish = async (payload: LoginPayload) => {
    const loginPromise = loginSvc(payload).then(() =>
      navigate("/dashboard/sheets"),
    );

    FeedbackUtils.promiseToast(loginPromise, language.loginMsgs);
  };

  return (
    <Row>
      <Col xs={24} lg={13} style={{ minHeight: "100vh" }}>
        <Card
          bordered={false}
          style={{ borderRadius: 0, minHeight: "100%" }}
          title={<MenuHeader title={language.createNewAccountTitle} />}
          extra={<GoBackButton />}
        >
          <Flex
            align="center"
            justify="center"
            width="100%"
            style={{ height: "80vh" }}
          >
            <LoginForm onFinish={onFinish} />
          </Flex>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
