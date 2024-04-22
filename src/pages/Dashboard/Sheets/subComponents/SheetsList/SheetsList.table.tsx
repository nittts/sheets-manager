import { SheetMetadata } from "@/@types/sheets";
import SheetsTable from "@/components/ui/Sheets/Table";

function SheetsListTable({ sheets = [] }: { sheets: SheetMetadata[] }) {
  return <SheetsTable data={sheets} />;
}

export default SheetsListTable;
