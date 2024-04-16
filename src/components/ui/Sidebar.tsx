import { Flex, Image, Layout, theme } from "antd";
import { useState } from "preact/hooks";

import logo from "@/assets/logo_white.jpeg";
import SidebarMenu from "./Sidebar.menu";
import SidebarSettingsButton from "./Sidebar.settingsButton";

const { Sider } = Layout;

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const { token } = theme.useToken();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        height: "100vh",
        background: token.colorBgContainer,
        position: "fixed",
      }}
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
