import { ITag } from "@/@types/tag";
import { Tag as AntdTag } from "antd";

function Tag({ color, key, title }: ITag) {
  return (
    <AntdTag color={color} key={key}>
      {title}
    </AntdTag>
  );
}

export default Tag;
