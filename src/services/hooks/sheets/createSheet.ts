import { SHEETS_QUERY_KEY } from "@/constants/query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSheet as createSheetSvc } from "@/services/sheets";
import { SheetMetadata } from "@/@types/sheets";

export default function createSheet() {
  const queryClient = useQueryClient();

  const onSuccess = (newSheet: SheetMetadata) => {
    queryClient.setQueriesData<SheetMetadata[]>(
      { queryKey: [SHEETS_QUERY_KEY] },
      (oldData) => {
        if (oldData) return [...oldData, newSheet];

        return [newSheet];
      },
    );
  };

  const { mutateAsync: createSheet, status: createSheetStatus } = useMutation({
    mutationFn: createSheetSvc,
    onSuccess,
  });

  return {
    createSheet,
    createSheetStatus,
  };
}
