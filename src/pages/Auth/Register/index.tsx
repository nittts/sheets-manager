import { Card, Col, Row } from "antd";

import RegisterForm from "@/components/ui/RegisterForm";
import GoBackButton from "@/components/ui/GoBackButton";
import MenuHeader from "@/components/ui/menuHeader";

import { useLanguage } from "@/providers/provider/LanguageProvider";

function Register() {
  const language = useLanguage();

  return (
    <Row>
      <Col xs={24} lg={12} style={{ minHeight: "100vh" }}>
        <Card
          bordered={false}
          style={{ borderRadius: 0, minHeight: "100%" }}
          title={<MenuHeader title={language.registerNewAccountTitle} />}
          extra={<GoBackButton />}
        >
          <RegisterForm />
        </Card>
      </Col>
    </Row>
  );
}

export default Register;
