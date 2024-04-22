import { SheetMetadata } from "@/@types/sheets";
import SheetCard from "@/components/ui/Sheets/Card";
import { useLanguage } from "@/providers/provider/LanguageProvider";
import { useGetSheets } from "@/services/hooks/sheets";
import { Empty, Space, Typography } from "antd";
import { useMemo } from "preact/compat";

const { Title } = Typography;

const renderCards = (sheets: SheetMetadata[]) => {
  return sheets.map((sheet) => (
    <SheetCard
      createdAt={sheet.createdAt}
      description={sheet.description}
      id={sheet.id}
      name={sheet.name}
      tags={sheet.tags}
    />
  ));
};

function SheetsRecent() {
  const { sheets } = useGetSheets();
  const language = useLanguage();

  const cards = useMemo(() => renderCards(sheets), [sheets]);

  return (
    <>
      <Title level={2}>{language.recentSheets}</Title>
      <Space size="large" style={{ overflow: "auto", padding: "8px" }}>
        {sheets.length === 0 ? <Empty /> : cards}
      </Space>
    </>
  );
}

export default SheetsRecent;
