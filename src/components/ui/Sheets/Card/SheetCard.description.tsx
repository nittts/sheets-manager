import { SheetInfo } from "@/@types/sheets";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { Descriptions } from "antd";



function SheetCardDescription(infos: SheetInfo) {
  const language = useLanguage();
  const { name = "", description = "", createdAt = "" } = infos;

  const items = [
    { key: "sheetCardDescription_name", label: language.name, children: name },
    { key: "sheetCardDescription_description", label: language.description, children: description },
    { key: "sheetCardDescription_createdAt", label: language.createdAt, children: createdAt },
  ];

  return (
    <Descriptions
      bordered
      size="small"
      items={items}
      column={{ xs: 1, lg: 1, md: 1, sm: 1, xl: 1, xxl: 1 }}
    />
  );
}

export default SheetCardDescription;
