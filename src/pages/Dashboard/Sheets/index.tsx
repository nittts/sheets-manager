import { Card, Flex } from "antd";

const containerStyles = {
  background: "red",
  margin: "1vh 1vw 1vw 48px",
};

const cardStyles = {
  width: "100%",
};

function Sheets() {
  return (
    <Flex style={containerStyles}>
      <Card style={cardStyles}>
        {Array.from(new Array(200))
          .fill("a")
          .map((a) => (
            <p>{a}</p>
          ))}
      </Card>
    </Flex>
  );
}

export default Sheets;
