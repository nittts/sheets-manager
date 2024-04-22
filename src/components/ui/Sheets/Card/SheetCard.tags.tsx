import Tag from "../../Tag";
import { SheetTag } from "@/@types/sheets";

type SheetCardTagsProps = {
  tags?: SheetTag[];
};

function SheetCardTags({ tags = [] }: SheetCardTagsProps) {
  return (
    <>
      {tags.map((tag) => (
        <Tag key={tag.tag} color={tag.color} title={tag.tag} />
      ))}
    </>
  );
}

export default SheetCardTags;
