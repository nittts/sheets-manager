import { Col, Row } from "antd";
import SheetsTagsFilter from "./SheetsTags";
import SearchBar from "@/components/ui/SearchBar";

import { useGetSheets } from "@/services/hooks/sheets";
import { useMemo } from "preact/hooks";
import { SheetsUtils } from "@/utils/sheets";

function SheetsFilter() {
  const { filters, updateGetFilters, sheets } = useGetSheets();

  const changeTags = (tag: string) => {
    if(filters.tags.includes(tag)) {
      const tags = filters.tags.filter((tag) => tag !== tag)
      return updateGetFilters({ ...filters, tags });
    }

    updateGetFilters({ ...filters, tags: [...filters.tags, tag] });
  };
  const changeSearch = (search: string) => {
    updateGetFilters({ ...filters, search });
  }

  const tags = useMemo(() => SheetsUtils.extractSheetsTags(sheets), [sheets]);

  return (
    <Row align="middle" gutter={[8, 8]}>
      <Col xs={24} md={12} lg={6}>
        <SearchBar onChange={(value) => changeSearch(value)} />
      </Col>
      <Col xs={24} md={12} lg={18} style={{ overflow: "auto" }}>
        <SheetsTagsFilter
          onChange={(value) => changeTags(value)}
          selectedTags={filters.tags}
          userTags={tags}
        />
      </Col>
    </Row>
  );
}

export default SheetsFilter;
