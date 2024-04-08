import { Card, Col, Row } from "antd";

import RegisterForm from "@/components/ui/RegisterForm";
import GoBackButton from "@/components/ui/GoBackButton";
import MenuHeader from "@/components/ui/menuHeader";

import { useLanguage } from "@/providers/provider/LanguageProvider";
import { RegisterPayload } from "@/@types/auth";
import { registerSvc } from "@/services/auth";
import { FeedbackUtils } from "@/utils/feedback";

const registerMgs = {
  error: "Failed to register",
  success: "Success on register",
  loading: "register...",
};

function Register() {
  const language = useLanguage();

  const onFinish = (payload: RegisterPayload) => {
    const registerPromise = registerSvc(payload);

    FeedbackUtils.promiseToast(registerPromise, registerMgs);
  };

  return (
    <Row>
      <Col xs={24} lg={12} style={{ minHeight: "100vh" }}>
        <Card
          bordered={false}
          style={{ borderRadius: 0, minHeight: "100%" }}
          title={<MenuHeader title={language.registerNewAccountTitle} />}
          extra={<GoBackButton />}
        >
          <RegisterForm onFinish={onFinish} />
        </Card>
      </Col>
    </Row>
  );
}

export default Register;
