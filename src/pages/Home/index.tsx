import ImagesPanel from "@/components/ui/ImagesPanel";
import { Button, Card, Flex, Input, Space } from "antd";

const slideImages = Object.keys(
  import.meta.glob("/public/slides/*.jpeg", { eager: true }),
);

function Home() {
  return (
    <Flex>
      <ImagesPanel
        images={slideImages}
        width="100vw"
        height="99vh"
        style={{ filter: "brightness(0.05)", position: "fixed", zIndex: 0 }}
      />
      <Card
        bordered={false}
        style={{
          width: "45%",
          height: "100vh",
        }}
      >
        <Space style={{ height: "100" }}></Space>
      </Card>
    </Flex>
  );
}

export default Home;
