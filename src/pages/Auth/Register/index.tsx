import { Card, Col, Row } from "antd";

import RegisterForm from "@/components/ui/RegisterForm";
import GoBackButton from "@/components/ui/GoBackButton";
import MenuHeader from "@/components/ui/menuHeader";

import { useLanguage } from "@/providers/provider/LanguageProvider";
import { RegisterPayload } from "@/@types/auth";
import { registerSvc } from "@/services/auth";
import { FeedbackUtils } from "@/utils/feedback";
import { useNavigate } from "react-router-dom";

function Register() {
  const language = useLanguage();
  const navigate = useNavigate();

  const onFinish = (payload: RegisterPayload) => {
    const registerPromise = registerSvc(payload).then(() => navigate("/auth/login"));

    FeedbackUtils.promiseToast(registerPromise, language.registerMsgs);
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
