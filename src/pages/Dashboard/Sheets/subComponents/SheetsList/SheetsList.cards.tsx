import { SheetMetadata } from "@/@types/sheets";
import SheetCard from "@/components/ui/Sheets/Card";
import { Empty, Flex } from "antd";
import { useMemo } from "preact/hooks";

const style = {
  dislpay: "flex",
  flexWrap: "wrap",
  gap: 16,
  justifyContent: "space-evenly",
};

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

function SheetsListCards({ sheets = [] }: { sheets: SheetMetadata[] }) {
  const cards = useMemo(() => renderCards(sheets), [sheets]);

  return <Flex style={style}>{sheets.length === 0 ? <Empty /> : cards}</Flex>;
}

export default SheetsListCards;
