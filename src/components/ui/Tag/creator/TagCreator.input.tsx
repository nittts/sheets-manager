import { SheetTag } from "@/@types/sheets";
import { Input, InputRef } from "antd";
import { TargetedEvent } from "preact/compat";
import { useEffect, useRef, useState } from "preact/hooks";

type TagCreatorInputProps = {
  value?: SheetTag;
  onFinish: (sheetTag: SheetTag) => void;
};

const inputStyle = {
  width: 64,
  height: 22,
  marginInlineEnd: 8,
  verticalAlign: "top",
};

const baseTag = {
  tag: "",
  color: "grey" as const,
};

function TagCreatorInput({ value, onFinish }: TagCreatorInputProps) {
  const inputRef = useRef<InputRef>(null);
  const [newTag, setNewTag] = useState<SheetTag>(value ?? baseTag);
  
  const handleComplete = () => onFinish(newTag);

  const onChange = (value: string) => setNewTag((prev) => ({ ...prev, tag: value }));

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <Input
      ref={inputRef}
      type="text"
      size="small"
      style={inputStyle}
      value={newTag.tag}
      onChange={(e: TargetedEvent<HTMLInputElement, Event>) => onChange(e.currentTarget.value)}
      onBlur={handleComplete}
      onPressEnter={handleComplete}
    />
  );
}

export default TagCreatorInput;
