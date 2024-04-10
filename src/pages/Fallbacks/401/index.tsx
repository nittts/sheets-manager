import { useLanguage } from "@/providers/provider/LanguageProvider";
import { Button, Flex, Result } from "antd";
import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const { unauthorized, goBack, login } = useLanguage();
  const navigate = useNavigate();

  const extra = [
    <Button type="primary" onClick={() => navigate(-1)}>{goBack}</Button>,
    <Button onClick={() => navigate("/auth/login")}>{login}</Button>,
  ];

  if (unauthorized) {
    return (
      <Flex align="center" justify="center" style={{ height: "100vh" }}>
        <Result
          status="warning"
          title={unauthorized.title}
          subTitle={unauthorized.subTitle}
          extra={extra}
        />
      </Flex>
    );
  }
}

export default Unauthorized;
