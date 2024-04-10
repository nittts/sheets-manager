import { useLanguage } from "@/providers/provider/LanguageProvider";
import { useUIMode } from "@/stores/preferences";
import logo from "@/assets/logo_white.jpeg";
import {
  CloudOutlined,
  EditOutlined,
  FileAddOutlined,
  FolderOpenOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserSwitchOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import {
  Image,
  Layout,
  Menu,
  MenuProps,
} from "antd";
import { Key } from "preact";
import { ReactNode } from "preact/compat";
import { useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const { Sider } = Layout;

const siderStyles = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  left: 0,
};

const getMenuGroup = (
  label: ReactNode,
  key: Key,
  icon: ReactNode,
  children: MenuItem[],
) => {
  return { key, icon, children, label, type: "group" };
};

const getMenuItem = (
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
  disabled?: boolean,
  danger?: boolean,
  children?: MenuItem[],
): MenuItem => {
  return { key, icon, children, label, disabled, danger };
};

const getMenuItems = () => {
  const language = useLanguage();
  return [
    getMenuItem(language.sheets, "sub1", <FolderOpenOutlined />, false, false, [
      getMenuGroup(language.manage, "gp1", null, [
        getMenuItem(language.list, `/dashboard/sheets`, <OrderedListOutlined />, false),
        getMenuItem(language.create, `/dashboard/sheets#create`, <FileAddOutlined />, false),
        getMenuItem(language.edit, `/dashboard/editor`, <EditOutlined />, false),
      ]),
    ]),
    getMenuItem(language.sessions, "sub2", <CloudOutlined />, false, false, [
      getMenuItem(language.listSession,`/dashboard/session`,<UnorderedListOutlined />,false),
      getMenuItem(language.joinSession, `/dashboard/session#join`, <UserSwitchOutlined />, false),
      getMenuItem(language.createSession,`/dashboard/session#create`,<UsergroupAddOutlined />,false),
    ]),
    getMenuItem(language.settings, "/dashboard/settings", <SettingOutlined />, false),
    getMenuItem(language.leave, "/", <LogoutOutlined />, false, true),
  ];
};

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  
  const navigate = useNavigate();
  const UIMode = useUIMode();
  
  const theme = UIMode.includes("DARK") ? "dark" : "light";
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={siderStyles}
    >
      <Image preview={false} src={logo} style={{ width: "100%" }} />
      <Menu
        theme={theme}
        mode="inline"
        items={getMenuItems()}
        onSelect={({ key }) => navigate(key)}
      />
    </Sider>
  );
}

export default Sidebar;
