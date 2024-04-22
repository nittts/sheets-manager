import { Table as AndtTable } from "antd";
import columns from "./SheetsTable.columns";
import { SheetMetadata } from "@/@types/sheets";

function Table({ data = [] }: { data: SheetMetadata[] }) {
  return (
    <AndtTable
      columns={columns}
      dataSource={data}
      rowSelection={{ type: "checkbox" }}
    />
  );
}

export default Table;
