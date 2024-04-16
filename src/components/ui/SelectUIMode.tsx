import { UIModes } from "@/@types/preferences";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { useUIMode, useUpdateUIMode } from "@/stores/preferences";
import { Button, Dropdown, MenuProps } from "antd";

function SelectUIMode() {
  const { darkMode, lightMode, compact } = useLanguage();
  const UIMode = useUIMode();
  const updateUIMode = useUpdateUIMode();

  const items = [
    { key: "DARK", label: darkMode },
    { key: "LIGHT", label: lightMode },
    { key: "COMPACT_DARK", label: `${darkMode} ${compact}` },
    { key: "COMPACT_LIGHT", label: `${lightMode} ${compact}` },
  ];

  const onClick: MenuProps["onClick"] = (e) => updateUIMode(e.key as UIModes);

  const selectedLabel = items.find(({ key }) => key === UIMode)?.label;

  return (
    <Dropdown menu={{ items, onClick, value: UIMode, selectable: true }}>
      <Button>{selectedLabel}</Button>
    </Dropdown>
  );
}

export default SelectUIMode;
