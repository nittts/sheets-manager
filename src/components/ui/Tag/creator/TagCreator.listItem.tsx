import { SheetTag } from "@/@types/sheets";
import { Tooltip, Tag } from "antd";
import TagCreatorInput from "./TagCreator.input";
import TagCreatorAccentPopover from "./TagCreator.accentPopover";

type EditableTagProps = {
  isLongTag: boolean;
  tag: SheetTag;
  handleEdit: (tag: SheetTag) => void;
  onClose: () => void;
  onDoubleClick: (e: MouseEvent) => void;
};

type TagListItemProps = {
  tag: SheetTag;
  editInputIndex: number;
  tagIndex: number;
  handleRemove: (tag: SheetTag) => void;
  handleEdit: (tag: SheetTag, index: number) => void;
  handleEditMode: (idx: number) => void;
};

function TagCreatorListItem(props: TagListItemProps) {
  const {
    tag,
    editInputIndex,
    tagIndex,
    handleEditMode,
    handleEdit,
    handleRemove,
  } = props;

  const onDoubleClick = () => {
    handleEditMode(tagIndex);
  };

  const onClose = () => {
    handleRemove(tag);
  };

  if (editInputIndex === tagIndex) {
    return (
      <TagCreatorInput
        onFinish={(tag) => handleEdit(tag, tagIndex)}
        value={tag}
      />
    );
  }

  const isLongTag = tag.tag.length > 20;
  if (isLongTag) {
    return (
      <Tooltip title={tag} key={tag}>
        <TagElem
          handleEdit={(tag) => handleEdit(tag, tagIndex)}
          isLongTag={isLongTag}
          onClose={onClose}
          onDoubleClick={onDoubleClick}
          tag={tag}
        />
      </Tooltip>
    );
  }

  return (
    <TagElem
      handleEdit={(tag) => handleEdit(tag, tagIndex)}
      isLongTag={isLongTag}
      onClose={onClose}
      onDoubleClick={onDoubleClick}
      tag={tag}
    />
  );
}

function TagElem(props: EditableTagProps) {
  const { isLongTag, onClose, tag, onDoubleClick, handleEdit } =
    props;

  return (
    <TagCreatorAccentPopover
      handleEdit={(editTag) => handleEdit(editTag)}
      tag={tag}
    >
      <Tag
        color={tag.color}
        key={tag.tag}
        closable
        style={{ userSelect: "none" }}
        onClose={onClose}
      >
        <span onDblClick={onDoubleClick}>
          {isLongTag ? `${tag.tag.slice(0, 20)}...` : tag.tag}
        </span>
      </Tag>
    </TagCreatorAccentPopover>
  );
}

export default TagCreatorListItem;
