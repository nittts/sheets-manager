import { Space, TableColumnsType, Tag } from "antd";
import SheetsActions from "../shared/Sheet.actions";
import { SheetMetadata, SheetTag } from "@/@types/sheets";

export interface DataType {}

const columns: TableColumnsType<SheetMetadata> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "description",
    dataIndex: "description",
  },
  {
    title: "createdAt",
    dataIndex: "createdAt",
  },
  {
    title: "tags",
    dataIndex: "tags",
    render: (tags) =>
      tags.map(({ tag, color }: SheetTag) => (
        <Tag color={color} key={tag}>
          {tag}
        </Tag>
      )),
  },
  {
    title: "ações",
    render: () => {
      return <Space size="large">{SheetsActions()}</Space>;
    },
  },
];

export default columns;
