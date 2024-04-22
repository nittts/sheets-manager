import { useState } from "preact/hooks";
import { Flex, Segmented, Typography } from "antd";

import SheetsListTable from "./SheetsList.table";
import SheetsListCards from "./SheetsList.cards";

import { useLanguage } from "@/providers/provider/LanguageProvider";
import { useGetSheets } from "@/services/hooks/sheets";

const { Title } = Typography;

type IOptions = "LIST" | "CARD";

const options: IOptions[] = ["LIST", "CARD"];

function SheetsList() {
  const language = useLanguage();
  const [view, setView] = useState<IOptions>("LIST");
  const { sheets } = useGetSheets();

  const onViewChange = (value: IOptions) => setView(value);

  return (
    <Flex vertical gap={10}>
      <Flex justify="space-between" align="center" gap={10}>
        <Title level={4} style={{ margin: 0 }}>
          {language.sheets}
        </Title>
        <Segmented<IOptions>
          style={{ alignSelf: "flex-end" }}
          options={options}
          onChange={(value) => onViewChange(value)}
        />
      </Flex>

      {view === "LIST" && <SheetsListTable sheets={sheets} />}
      {view === "CARD" && <SheetsListCards sheets={sheets} />}
    </Flex>
  );
}

export default SheetsList;
