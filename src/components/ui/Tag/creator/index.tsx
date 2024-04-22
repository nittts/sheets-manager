import { SheetTag } from "@/@types/sheets";
import { Flex } from "antd";
import { useState } from "preact/hooks";

import TagCreatorListItem from "./TagCreator.listItem";
import TagCreatorCreator from "./TagCreator.create";

type TagCreatorProps = {
  onChange: (newTags: SheetTag[]) => void;
  tags: SheetTag[];
};

function TagCreator({ onChange, tags = [] }: TagCreatorProps) {
  const [editInputIndex, setInputIndex] = useState(-1);

  const handleRemove = (rTag: SheetTag) => {
    const newTags = tags.filter((tag) => tag.tag !== rTag.tag);

    onChange(newTags)
  };

  const handleAdd = (nTag: SheetTag) => {
    if (!tags.some((sTag) => sTag.tag === nTag.tag) && nTag.tag) {
      const newTags = [...tags, nTag];
      onChange(newTags);
    }
    setInputIndex(-1)
  };

  const handleEdit = (
    newValue: SheetTag,
    idx: number,
  ) => {
    const tag = { ...tags[idx], ...newValue };
    let copy = [...tags]

    copy[idx] = tag

    onChange(copy);
    setInputIndex(-1)
  };

  const handleEditMode = (newEditIndex: number) => {
    setInputIndex(newEditIndex);
  };

  return (
    <Flex gap="4px 0" wrap="wrap">
      {tags.map<React.ReactNode>((tag, index) => (
        <TagCreatorListItem
          editInputIndex={editInputIndex}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
          handleEditMode={handleEditMode}
          tag={tag}
          tagIndex={index}
        />
      ))}
      <TagCreatorCreator
        addTag={handleAdd}
        editInputIndex={editInputIndex}
        handleEditMode={handleEditMode}
      />
    </Flex>
  );
}

export default TagCreator;
