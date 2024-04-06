import { RollbackOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <Tooltip title="Go Back">
      <Button
        type="primary"
        shape="circle"
        icon={<RollbackOutlined />}
        onClick={() => navigate("/")}
      />
    </Tooltip>
  );
}

export default GoBackButton;
