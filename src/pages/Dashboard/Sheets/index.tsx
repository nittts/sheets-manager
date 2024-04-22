import { Divider, Flex } from "antd";

import SheetsRecent from "./subComponents/SheetsRecent";
import SheetsList from "./subComponents/SheetsList";
import SheetsFilter from "./subComponents/SheetsFilter";
import SheetsCreate from "./subComponents/SheetsCreate";

const containerStyles = { margin: "2vh 1vw 1vw 48px" };

function Sheets() {
  return (
    <Flex style={containerStyles} gap="middle" vertical>
      <SheetsRecent />
      <Divider />
      <SheetsFilter />
      <SheetsList />
      <SheetsCreate />
    </Flex>
  );
}

export default Sheets;
