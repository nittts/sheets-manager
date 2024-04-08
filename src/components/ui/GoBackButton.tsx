import { useLanguage } from "@/providers/provider/LanguageProvider";
import { RollbackOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();
  const language = useLanguage();

  return (
    <Tooltip title={language.goBack}>
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
