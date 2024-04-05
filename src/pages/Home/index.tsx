import ImagesPanel from "@/components/ui/ImagesPanel";
import { Col, Row } from "antd";

import MenuSide from "./subComponents/menuSide";
import SelectAccountList from "./subComponents/selectAccountList";

const slideImages = Object.keys(
  import.meta.glob("/public/slides/*.jpeg", { eager: true }),
);

const pageContainerStyles = {
  height: "100vh",
  width: "100%",
  paddingLeft: "1em",
  paddingRight: "1em",
};

function Home() {
  return (
    <Row style={pageContainerStyles} align="middle">
      <ImagesPanel
        images={slideImages}
        width="100%"
        height="100%"
        style={{ filter: "brightness(0.1)", position: "fixed", zIndex: -1 }}
      />

      <Col xs={24} md={12}>
        <MenuSide />
      </Col>
      <Col xs={24} md={12}>
        <SelectAccountList list={[]} />
      </Col>
    </Row>
  );
}

export default Home;
