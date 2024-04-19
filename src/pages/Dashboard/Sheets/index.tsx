import { Divider, Flex } from "antd";
import RecentSheets from "./subComponents/RecentSheets";
import SheetsList from "./subComponents/SheetsList";
import SheetsFilter from "./subComponents/SheetsFilter";

const containerStyles = { margin: "2vh 1vw 1vw 48px" };

function Sheets() {
  return (
    <Flex style={containerStyles} gap="middle" vertical>
      <RecentSheets />
      <Divider />
      <SheetsFilter />
      <SheetsList />
    </Flex>
  );
}

export default Sheets;
