import {
  FaFile,
  FaFolderOpen,
  FaFileMedical,
  FaFileSignature,
  FaListUl,
  FaUsers,
  FaUserCheck,
  FaUserPlus,
  FaDiceD20,
  FaClipboardList,
  FaClipboardUser,
  FaClipboardCheck,
} from "react-icons/fa6";


import { Menu, theme } from "antd";
import { Key } from "preact";
import { ReactNode } from "preact/compat";
import { useLocation, useNavigate } from "react-router-dom";

import { useLanguage } from "@/providers/provider/LanguageProvider";
import { useUIMode } from "@/stores/preferences";
import { RiLogoutCircleLine } from "react-icons/ri";

function getMenuItem(label: ReactNode,key: Key,icon?: ReactNode,disabled?: boolean,danger?: boolean,children?: ReactNode[]) {
  return { key, icon, children, label, disabled, danger };
}

function getMenuItems() {
  const language = useLanguage();
  return [
    getMenuItem(language.sheets, "sub1", <FaFolderOpen />, false, false, [
      getMenuItem(language.list,"/dashboard/sheets", <FaFile />,false),
      getMenuItem(language.create,"/dashboard/sheets#create",<FaFileMedical />,false),
      getMenuItem(language.edit, "/dashboard/editor", <FaFileSignature />, false),
    ]),
    getMenuItem(language.sessions, "sub2", <FaUsers />, false, false, [
      getMenuItem(language.listSession,"/dashboard/session",<FaListUl />,false),
      getMenuItem(language.joinSession,"/dashboard/session#join",<FaUserCheck />,false),
      getMenuItem(language.createSession,"/dashboard/session#create",<FaUserPlus />,false),
    ]),
    getMenuItem(language.characters, "sub3", <FaDiceD20 />,false, false, [
      getMenuItem(language.listCharacters, '/dashboard/characters', <FaClipboardList />,false),
      getMenuItem(language.editCharacter, '/dashboard/characters#edit', <FaClipboardUser />,false),
      getMenuItem(language.createCharacter, '/dashboard/characters#create', <FaClipboardCheck />,false),
    ]),
    getMenuItem(language.leave, "/", <RiLogoutCircleLine />, false, true),
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
