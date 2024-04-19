import DescriptiveIcon from "@/components/ui/DescriptiveIcon";
import RecentSheetCard from "@/components/ui/RecentSheetCard";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Col, Flex, Row, Space, Table, TableColumnsType, Tag } from "antd";
import { Key } from "preact";
interface DataType {
  key: Key;
  name: string;
  description: string;
  createdAt: string;
  tags: string[];
  tagColor: string;
}

const columns: TableColumnsType<DataType> = [
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
    render: (tags, record) =>
      tags.map((tag: string) => (
        <Tag color={record.tagColor} key={tag}>
          {tag}
        </Tag>
      )),
  },
  {
    title: "ações",
    render: () => {
      return (
        <Space>
          <DescriptiveIcon
            type="primary"
            title="new character"
            icon={<PlusOutlined />}
          />
          <DescriptiveIcon type="link" title="edit" icon={<EditOutlined />} />
          <DescriptiveIcon
            type="primary"
            title="delete"
            danger
            icon={<DeleteOutlined />}
          />
        </Space>
      );
    },
  },
];

const data: DataType[] = [
  {
    key: "2",
    name: "ficha 1",
    description: "ficha de chuchulo",
    createdAt: new Date().toISOString(),
    tags: ["chuchulo"],
    tagColor: "lime",
  },
  {
    key: "3",
    name: "ficha 2",
    description: "ficha de dnd",
    createdAt: new Date().toISOString(),
    tags: ["dnd"],
    tagColor: "volcano",
  },
  {
    key: "4",
    name: "ficha 3",
    description: "ficha de vampiro",
    createdAt: new Date().toISOString(),
    tags: ["vampiro"],
    tagColor: "red",
  },
];

function SheetsList() {
  return <Table columns={columns} dataSource={data} bordered rowSelection={{ type: "checkbox"}} />;

  // return (
  //   <Flex style={{ dislpay: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-evenly" }}>
  //     {Array.from(new Array(20)).map(() => (
  //       <RecentSheetCard />
  //     ))}
  //   </Flex>
  // );
}

export default SheetsList;
