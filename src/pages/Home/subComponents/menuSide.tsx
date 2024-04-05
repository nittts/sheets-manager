import { Flex, Image, Typography } from "antd";
import LoginIcon from "/assets/login_icon.png";
import { useLanguage } from "@/providers/provider/LanguageProvider";

const { Title } = Typography;

function MenuSide() {
  const language = useLanguage();

  return (
    <Flex
      vertical
      align="flex-start"
      justify="flex-start"
      style={{ width: "100%", height: "100%" }}
    >
      <Flex align="flex-end" justify="center" wrap="wrap">
        <Image
          src={LoginIcon}
          preview={false}
          wrapperStyle={{ width: "10em" }}
        />
        <Title level={4}>{language.systemName}</Title>
      </Flex>
    </Flex>
  );
}

export default MenuSide;
