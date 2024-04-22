import { SheetTag } from "@/@types/sheets";
import { FaPlusSquare } from "react-icons/fa";

import Tag from "..";
import TagCreatorInput from "./TagCreator.input";

type TagCreatorCreateProps = {
  editInputIndex: number;
  addTag: (newTag: SheetTag) => void;
  handleEditMode: (newIndex: number) => void;
};

const style = {
  plus: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    cursor: "pointer",
  },
};

function TagCreatorCreate(props: TagCreatorCreateProps) {
  const { editInputIndex , addTag, handleEditMode } = props;

  const showInput = () => {
    handleEditMode(-10);
  };

  if (editInputIndex === -10) {
    return <TagCreatorInput onFinish={addTag} />;
  }

  return (
    <Tag
      color="grey"
      key="newTag"
      style={style.plus}
      icon={<FaPlusSquare />}
      onClick={showInput}
      title="New Tag"
    />
  );
}

export default TagCreatorCreate;
