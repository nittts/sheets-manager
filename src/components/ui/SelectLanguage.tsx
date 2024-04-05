import { Languages } from "@/@types/preferences";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { usePreferencesStore } from "@/stores/preferences";
import { LangUtils } from "@/utils/lang";
import { Select, Space } from "antd";

type Option = { label: string; value: string; src: string };

const filterOption = (input: string, option?: Option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const renderOptions = (opt: Option) => (
  <Select.Option key={opt.value}>
    <Space align="center">
      <img src={opt.src} width="25rem" style={{ marginBottom: "-0.5rem" }} />
      {opt.label}
    </Space>
  </Select.Option>
);

function SelectLanguage() {
  const language = useLanguage();
  const availableLanguages = LangUtils.listAllLanguages();
  const { preferences, updateLang } = usePreferencesStore();

  const options = availableLanguages.map((abbreviation) => ({
    value: abbreviation,
    label: language[`${abbreviation}_lang`],
    src: `https://flagsapi.com/${abbreviation.toUpperCase()}/flat/64.png`,
  }));

  const onChange = (value: Languages) => updateLang(value);

  return (
    <Select
      showSearch
      variant="filled"
      placeholder={language.selectLang}
      defaultValue={preferences.lang}
      optionFilterProp="children"
      defaultActiveFirstOption={true}
      onChange={onChange}
      filterOption={filterOption}
    >
      {options.map(renderOptions)}
    </Select>
  );
}

export default SelectLanguage;
