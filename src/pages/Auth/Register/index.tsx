import { Button, Card, Col, Row } from "antd";

import ImagesPanel from "@/components/ui/ImagesPanel";
import RegisterForm from "@/components/ui/RegisterForm";
import GoBackButton from "@/components/ui/GoBackButton";
import MenuHeader from "@/components/ui/menuHeader";

import { useLanguage } from "@/providers/provider/LanguageProvider";

const slideImages = Object.keys(
  import.meta.glob("/public/slides/*.jpeg", { eager: true }),
);

function Register() {
  const language = useLanguage();

  return (
    <Row>
      <ImagesPanel
        images={slideImages}
        width="100%"
        height="100%"
        style={{ filter: "brightness(0.1)", position: "fixed", zIndex: -1 }}
      />

      <Col xs={24} lg={12} style={{ minHeight: "100vh" }}>
        <Card
          bordered={false}
          style={{ borderRadius: 0, minHeight: "100%" }}
          title={<MenuHeader title={language.registerNewAccountTitle} />}
          extra={<GoBackButton />}
        >
          <RegisterForm />

          <Button
            block
            type="primary"
            size="large"
            style={{ marginTop: "20px" }}
          >
            Registrar
          </Button>
        </Card>
      </Col>
    </Row>
  );
}

export default Register;
