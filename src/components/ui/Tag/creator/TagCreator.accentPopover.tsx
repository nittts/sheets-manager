import { Colors } from "@/@types/preferences";
import { SheetTag } from "@/@types/sheets";
import { colors } from "@/constants/colors";
import { Flex, Popover, Tag } from "antd";
import { ReactNode } from "preact/compat";

type AccentPopoverProps = {
  children?: ReactNode;
  handleEdit: (tag: SheetTag) => void;
  tag: SheetTag;
};

const style = {
  dislpay: "flex",
  flexWrap: "wrap",
  maxWidth: "200px",
  gap: 6,
  justifyContent: "center",
};

const content = ({ tag, handleEdit }: AccentPopoverProps) => {
  const updateTagAccent = (color: Colors) => handleEdit({ ...tag, color });

  const isLongTag = tag.tag.length > 20;
  return (
    <Flex style={style}>
      {colors.map((color) => (
        <Tag onClick={() => updateTagAccent(color)} color={color}>
          {isLongTag ? `${tag.tag.slice(0, 20)}...` : tag.tag}
        </Tag>
      ))}
    </Flex>
  );
};

function TagCreatorAccentPopover(props: AccentPopoverProps) {
  const { children, handleEdit, tag } = props;

  return (
    <Popover
      trigger="contextMenu"
      content={content({ tag, handleEdit })}
      title="Choose Color"
    >
      {children}
    </Popover>
  );
}

export default TagCreatorAccentPopover;
