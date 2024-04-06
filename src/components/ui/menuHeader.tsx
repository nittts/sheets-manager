import { Flex, Image, Typography } from "antd";
import LoginIcon from "/assets/login_icon.png";

const { Title } = Typography;

function MenuHeader({ title }: { title: string }) {
  return (
    <Flex align="end">
      <Image src={LoginIcon} preview={false} wrapperStyle={{ width: "4em" }} />
      <Title level={4}>{title}</Title>
    </Flex>
  );
}

export default MenuHeader;
