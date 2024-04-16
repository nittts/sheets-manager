import { SettingOutlined } from "@ant-design/icons";
import { Button, Flex, Popover } from "antd";
import SelectLanguage from "./SelectLanguage";
import { useState } from "preact/hooks";
import SelectAccent from "./SelectAccent";
import SelectUIMode from "./SelectUIMode";
import SelectTransition from "./SelectTransition";

const content = () => {
  return (
    <Flex vertical gap={10} style={{ maxWidth: "260px" }}>
      <SelectLanguage />
      <SelectUIMode />
      <SelectAccent />
      <SelectTransition />
    </Flex>
  );
};

function SidebarSettingsButton() {
  const [open, setOpen] = useState(false);

  const handleShowPopover = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <Popover
        content={content()}
        placement="right"
        trigger="click"
        open={open}
      >
        <Button
          onClick={handleShowPopover}
          type="primary"
          icon={<SettingOutlined style={{ fontSize: "1.5em" }} />}
          key="dropdown-side-settings"
        />
      </Popover>
    </div>
  );
}

export default SidebarSettingsButton;
