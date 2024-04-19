import RecentSheetCard from "@/components/ui/RecentSheetCard";
import { Space } from "antd";

function RecentSheets() {
  return (
    <Space size="large" style={{ overflow: "auto" }}>
      {Array.from(new Array(20)).map(() => (
        <RecentSheetCard />
      ))}
    </Space>
  );
}

export default RecentSheets;
