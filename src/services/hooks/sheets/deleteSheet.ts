import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SHEETS_QUERY_KEY } from "@/constants/query";
import { deleteSheet as deleteSheetSvc } from "@/services/sheets";
import { SheetMetadata } from "@/@types/sheets";

export default function deleteSheet() {
  const queryClient = useQueryClient();

  const onSuccess = (deletedSheet: SheetMetadata) => {
    queryClient.setQueriesData<SheetMetadata[]>(
      { queryKey: [SHEETS_QUERY_KEY] },
      (oldData) => {
        if (oldData) {
          return oldData.filter((key) => key.id !== deletedSheet.id);
        }

        return [];
      },
    );
  };

  const { mutateAsync: deleteSheet, status: deleteSheetStatus } = useMutation({
    mutationFn: deleteSheetSvc,
    onSuccess,
  });

  return {
    deleteSheet,
    deleteSheetStatus,
  };
}
