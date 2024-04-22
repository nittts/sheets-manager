import { SheetTag } from "@/@types/sheets";
import { Space, Tag as AntdTag } from "antd";
import { useMemo } from "preact/hooks";

type SheetsTagsFilter = {
  selectedTags: string[];
  onChange: (tag: string) => void;
  userTags: SheetTag[];
};

const renderSelectedTags = (filter: SheetsTagsFilter) => {
  const { onChange, selectedTags, userTags = [] } = filter;

  return userTags.map(({ tag, color }) => (
    <AntdTag
      color={selectedTags.includes(tag) ? `${color}-inverse` : color}
      key={`${tag}_${color}`}
      onClick={() => onChange(tag)}
      style={{ cursor: "pointer" }}
    >
      {tag}
    </AntdTag>
  ));
};

function SheetsTagsFilter(filterProps: SheetsTagsFilter) {
  const tags = useMemo(() => renderSelectedTags(filterProps), [filterProps]);

  return <Space style={{ padding: "8px" }}>{tags}</Space>;
}

export default SheetsTagsFilter;
