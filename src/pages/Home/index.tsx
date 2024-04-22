import ImagesPanel from "@/components/ui/ImagesPanel";
import { Card, Col, Row } from "antd";

import SelectAccountList from "./subComponents/selectAccountList";
import SelectLanguage from "@/components/ui/Select/Select.language";
import MenuHeader from "@/components/ui/MenuHeader";
import { useLanguage } from "@/providers/provider/LanguageProvider";

const slideImages = Object.keys(
  import.meta.glob("/public/slides/*.jpeg", { eager: true }),
);

function Home() {
  const language = useLanguage();

  return (
    <Row align="middle" justify="end">
      <ImagesPanel
        images={slideImages}
        style={{ filter: "brightness(0.1)", position: "fixed", zIndex: -1 }}
      />
      <Col xs={24} lg={12}>
        <Card
          bordered={false}
          style={{ width: "100%", height: "100vh" }}
          extra={<SelectLanguage />}
          title={<MenuHeader title={language.systemName} />}
        >
          <SelectAccountList list={[]} />
        </Card>
      </Col>
    </Row>
  );
}

export default Home;
