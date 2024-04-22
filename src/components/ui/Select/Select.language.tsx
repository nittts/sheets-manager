import { Languages } from "@/@types/preferences";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { usePreferencesStore } from "@/stores/preferences";
import { LangUtils } from "@/utils/lang";
import { Select, Space } from "antd";

type Option = { label: string; value: string; src: string; key: string };

const filterOption = (input: string, option?: Option) =>
  (option?.key ?? "").toLowerCase().includes(input.toLowerCase());

function SelectLanguage() {
  const language = useLanguage();
  const availableLanguages = LangUtils.listAllLanguages();
  const { preferences, updateLang } = usePreferencesStore();

  const options = availableLanguages.map((abbreviation) => ({
    key: language[`${abbreviation}_lang`],
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

function renderOptions(opt: Option) {
  return (
    <Select.Option key={opt.label} value={opt.value}>
      <Space align="center">
        <img src={opt.src} width="25rem" style={{ marginBottom: "-0.5rem" }} />
        {opt.label}
      </Space>
    </Select.Option>
  );
}

export default SelectLanguage;
