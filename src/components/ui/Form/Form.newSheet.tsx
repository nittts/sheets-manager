import { CreateSheetPayload, SheetTag } from "@/@types/sheets";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { Button, Form, Input } from "antd";
import { FaFileAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import TagCreator from "../Tag/creator";
import { useEffect, useState } from "preact/hooks";

type newSheetFormProps = {
  onFinish: (payload: CreateSheetPayload) => void;
};

function NewSheetForm({ onFinish }: newSheetFormProps) {
  const [tags, setTags] = useState<SheetTag[]>([]);
  const [form] = Form.useForm();

  const onChangeTags = (newTags: SheetTag[]) => {
    setTags(newTags);
  };

  useEffect(() => {
    form.setFieldValue("tags", tags);
  }, [tags]);

  return (
    <Form
      initialValues={{ tags: [], name: "", description: "" }}
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      {renderFormItems()}
      <TagCreator tags={tags} onChange={onChangeTags} />
      <Button>Finish</Button>
    </Form>
  );
}

function renderFormItems() {
  const language = useLanguage();
  const { errors } = language;

  const rules = [{ required: true, message: errors.required }];

  const formItems = [
    {
      prefix: <FaFileAlt />,
      placeholder: language.name,
      name: "name",
    },
    {
      prefix: <FaBook />,
      placeholder: language.description,
      name: "description",
    },
  ];

  return formItems.map((opt) => (
    <Form.Item name={opt.name} rules={rules}>
      <Input
        size="large"
        variant="filled"
        prefix={opt.prefix}
        placeholder={opt.placeholder}
      />
    </Form.Item>
  ));
}

export default NewSheetForm;
