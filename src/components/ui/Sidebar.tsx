import { Flex, Image, Layout, theme } from "antd";

import logo from "@/assets/logo_white.jpeg";
import SidebarMenu from "./Sidebar.menu";
import SidebarSettingsButton from "./Sidebar.settingsButton";

const { Sider } = Layout;

function Sidebar() {
  const { token } = theme.useToken();

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ minHeight: "100vh", background: token.colorBgContainer }}
      zeroWidthTriggerStyle={{ background: token.colorPrimary }}
    >
      <Flex
        vertical
        align="center"
        gap={6}
        style={{ background: token.colorPrimary, paddingBottom: 3 }}
      >
        <Image preview={false} src={logo} style={{ width: "100%" }} />
        <SidebarSettingsButton />
      </Flex>
      <SidebarMenu />
    </Sider>
  );
}

export default Sidebar;
