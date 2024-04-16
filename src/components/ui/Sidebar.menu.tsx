import {
  CloudOutlined,
  EditOutlined,
  FileAddOutlined,
  FolderOpenOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  UserSwitchOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

import { Menu, theme } from "antd";
import { Key } from "preact";
import { ReactNode } from "preact/compat";
import { useLocation, useNavigate } from "react-router-dom";

import { useLanguage } from "@/providers/provider/LanguageProvider";
import { useUIMode } from "@/stores/preferences";

function getMenuItem(label: ReactNode,key: Key,icon?: ReactNode,disabled?: boolean,danger?: boolean,children?: ReactNode[]) {
  return { key, icon, children, label, disabled, danger };
}

function getMenuItems() {
  const language = useLanguage();
  return [
    getMenuItem(language.sheets, "sub1", <FolderOpenOutlined />, false, false, [
      getMenuItem(language.list,`/dashboard/sheets`,<OrderedListOutlined />,false),
      getMenuItem(language.create,`/dashboard/sheets#create`,<FileAddOutlined />,false),
      getMenuItem(language.edit, `/dashboard/editor`, <EditOutlined />, false),
    ]),
    getMenuItem(language.sessions, "sub2", <CloudOutlined />, false, false, [
      getMenuItem(language.listSession,`/dashboard/session`,<UnorderedListOutlined />,false),
      getMenuItem(language.joinSession,`/dashboard/session#join`,<UserSwitchOutlined />,false),
      getMenuItem(language.createSession,`/dashboard/session#create`,<UsergroupAddOutlined />,false),
    ]),
    getMenuItem(language.leave, "/", <LogoutOutlined />, false, true),
  ];
}

function SidebarMenu() {
  const navigate = useNavigate();
  const UIMode = useUIMode();
  
  const { token } = theme.useToken();
  const { pathname, hash } = useLocation();

  const darkModeTheme = UIMode.includes("DARK") ? "dark" : "light";
  return (
    <Menu
      theme={darkModeTheme}
      mode="inline"
      selectedKeys={[`${pathname}${hash}`]}
      items={getMenuItems()}
      onSelect={({ key }) => navigate(key)}
      style={{ background: token.colorBgContainer }}
    />
  );
}

export default SidebarMenu;
