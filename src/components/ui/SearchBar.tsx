import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { SearchProps } from "antd/es/input";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

function SearchBar() {
  return (
    <div style={{ minWidth: "15em" }}>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
        suffix={suffix}
      />
    </div>
  );
}

export default SearchBar;
