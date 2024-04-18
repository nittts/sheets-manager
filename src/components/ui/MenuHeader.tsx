import { Flex, Image, Typography, theme } from "antd";
import LoginIcon from "@/assets/login_icon.png";

const { Title } = Typography;

function MenuHeader({ title }: { title: string }) {
  const { token } = theme.useToken();

  return (
    <Flex align="center">
      <Image
        src={LoginIcon}
        preview={false}
        wrapperStyle={{
          width: "4em",
          background: token.colorPrimary,
          borderRadius: "9999px",
          padding: "4px",
          margin: "4px",
        }}
      />
      <Title level={4} style={{ marginBottom: 0 }}>
        {title}
      </Title>
    </Flex>
  );
}

export default MenuHeader;
