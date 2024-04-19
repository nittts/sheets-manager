import { StyleUtils } from "@/utils/styles";
import { Space, Tag } from "antd";
import { useState } from "preact/hooks";

const tagsData = [
  "Chuchulo",
  "DND",
  "VAMPIRONAHW",
  "TROMBETAAAAAAAA",
  "TROMBETAAAAAAAA",
  "TROMBETAAAAAAAA",
  "TROMBETAAAAAAAA",
  "TROMBETAAAAAAAA",
  "TROMBETAAAAAAAA",
  "TROMBETAAAAAAAA",
  "TROMBETAAAAAAAA",
  "TROMBETAAAAAAAA",
];

function SheetsTagsFilter() {
  const [selectedTags] = useState<string[]>(["DND"]);

  return (
    <Space style={{ padding: "8px" }}>
      {tagsData.map((tag) => (
        <Tag
          color={StyleUtils.getRandomAccentColor()}
          key={tag}
          checked={selectedTags.includes(tag)}
        >
          {tag}
        </Tag>
      ))}
    </Space>
  );
}

export default SheetsTagsFilter;
