import { Descriptions } from "antd";

type IRecentSheetCardDescriptionProps = {
  name: string;
  description: string;
  createdAt: Date | string;
};

function RecentSheetCardDescription(props: IRecentSheetCardDescriptionProps) {
  const { name, description, createdAt } = props;

  const items = [
    { key: "1", label: "Name", children: name },
    { key: "2", label: "description", children: description },
    { key: "3", label: "createdAt", children: createdAt },
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

export default RecentSheetCardDescription;
