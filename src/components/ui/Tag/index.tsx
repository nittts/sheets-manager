import { ITag } from "@/@types/tag";
import { Tag as AntdTag } from "antd";
import { ComponentProps } from "preact/compat";

type TagProps = ITag & ComponentProps<typeof AntdTag>;

function Tag({ color, key, title, style, icon, ...rest }: TagProps) {
  return (
    <AntdTag icon={icon} color={color} key={key} style={style} {...rest}>
      {title}
    </AntdTag>
  );
}

export default Tag;
