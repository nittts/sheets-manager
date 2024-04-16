import { Colors } from "@/@types/preferences";
import { useAccent, useUpdateAccent } from "@/stores/preferences";
import { presetPrimaryColors } from "@ant-design/colors";
import { CheckCircleFilled } from "@ant-design/icons";
import { Col, Row } from "antd";

type ColorCircleProps = {
  hex: string;
  selected: boolean;
  onClick: () => void;
};

const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const colors: Colors[] = ["grey","geekblue","blue","cyan","magenta","purple","red","volcano","orange","gold","yellow","green","lime"];

function SelectAccent() {
  const accent = useAccent();
  const updateAccent = useUpdateAccent();

  return (
    <Row width="100%" align="middle" justify="center">
      {colors.map((color) => (
        <Col span={6} style={center}>
          {renderColorCircle({
            hex: presetPrimaryColors[color],
            selected: accent === color,
            onClick: () => updateAccent(color),
          })}
        </Col>
      ))}
    </Row>
  );
}

function renderColorCircle({ hex, onClick, selected }: ColorCircleProps) {
  const circleStyle = {
    ...center,
    width: "100%",
    height: "3.5em",
    background: hex,
  };

  return (
    <div style={circleStyle} onClick={onClick}>
      {selected && <CheckCircleFilled style={{ fontSize: "2em" }} />}
    </div>
  );
}

export default SelectAccent;
