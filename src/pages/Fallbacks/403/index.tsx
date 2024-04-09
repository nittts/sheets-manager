import { useLanguage } from "@/providers/provider/LanguageProvider";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

import notAllowedMage from "@/assets/notAllowedMage.jpeg"

function Forbidden() {
  const { forbidden, goBack, login } = useLanguage();
  const navigate = useNavigate();

  const extra = [
    <Button type="primary" onClick={() => navigate(-1)}>
      {goBack}
    </Button>,
    <Button onClick={() => navigate("/auth/login")}>{login}</Button>,
  ];

  if (forbidden) {
    return (
      <Result
        icon={
          <img
            style={{ width: "400px", borderRadius: "999px" }}
            src={notAllowedMage}
          />
        }
        title={forbidden.title}
        subTitle={forbidden.subTitle}
        extra={extra}
      />
    );
  }
}

export default Forbidden;
