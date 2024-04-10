import { useLanguage } from "@/providers/provider/LanguageProvider";
import { Button, Flex, Result } from "antd";
import { useNavigate } from "react-router-dom";

import Menzoberranzan from "@/assets/menzoberranzan.jpeg";

function NotFound() {
  const { notFound, goBack, login } = useLanguage();
  const navigate = useNavigate();

  const extra = [
    <Button type="primary" onClick={() => navigate(-1)}>
      {goBack}
    </Button>,
    <Button onClick={() => navigate("/auth/login")}>{login}</Button>,
  ];

  if (notFound) {
    return (
      <Flex align="center" justify="center" style={{ height: "100vh" }}>
        <Result
          icon={
            <img
              style={{ width: "400px", borderRadius: "999px" }}
              src={Menzoberranzan}
            />
          }
          title={notFound.title}
          subTitle={notFound.subTitle}
          extra={extra}
        />
      </Flex>
    );
  }
}

export default NotFound;
