import { SHEETS_QUERY_KEY } from "@/constants/query";
import { getSheets } from "@/services/sheets";

import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "preact/hooks";

type SearchFilters = {
  search: string;
  tags: string[];
};

export default function useGetSheets() {
  const [getSheetFilters, setSearch] = useState<SearchFilters>({
    search: "",
    tags: [],
  });

  const updateGetFilters = (values: SearchFilters) =>
    setSearch((prev) => ({ ...prev, ...values }));

  const filters = useDebounce(getSheetFilters, 500);

  const { data: sheets, status: getSheetsStatus } = useQuery({
    queryKey: [SHEETS_QUERY_KEY, filters],
    queryFn: () => getSheets(filters),
  });

  return { sheets: sheets ?? [], getSheetsStatus, updateGetFilters, filters };
}
