import { SheetMetadata } from "@/@types/sheets";
import SheetsListTable from "./SheetsTable.table";

function SheetsTable({ data = [] }: { data?: SheetMetadata[] }) {
  return <SheetsListTable data={data} />;
}

export default SheetsTable;
