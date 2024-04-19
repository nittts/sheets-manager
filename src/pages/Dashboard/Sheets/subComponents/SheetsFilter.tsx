import { Col, Row } from "antd";
import SheetsTagsFilter from "./SheetsTags";
import SearchBar from "@/components/ui/SearchBar";

function SheetsFilter() {
  return (
    <Row align="middle" gutter={[8, 8]}>
      <Col xs={24} md={12} lg={6}>
        <SearchBar />
      </Col>
      <Col xs={24} md={12} lg={18} style={{ overflow: "auto" }}>
        <SheetsTagsFilter />
      </Col>
    </Row>
  );
}

export default SheetsFilter;
