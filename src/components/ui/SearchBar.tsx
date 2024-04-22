import { useLanguage } from "@/providers/provider/LanguageProvider";
import { Input } from "antd";
import { SearchProps } from "antd/es/input";

const { Search } = Input;

type SearchBarProps = {
  onChange: (value: string) => void;
};

function SearchBar({ onChange }: SearchBarProps) {
  const language = useLanguage();
  const onSearch: SearchProps["onSearch"] = (value) => onChange(value);

  return (
    <div style={{ minWidth: "15em" }}>
      <Search
        size="large"
        placeholder={language.inputSearch}
        onSearch={onSearch}
        enterButton
      />
    </div>
  );
}

export default SearchBar;
