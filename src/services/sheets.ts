import { Colors } from "@/@types/preferences";
import { SheetMetadata } from "@/@types/sheets";

const mockSheet = {
  createdAt: new Date().toISOString(),
  description: "lkajsdlaksjdk",
  name: "lkasjdlkasjdkl",
  id: "LASKDJLKASJDKL",
  tags: [{ tag: "CHUCHULO", color: "lime" as Colors }],
};

const mockList: SheetMetadata[] = Array.from(new Array(20)).fill(null).map(() => ({
  ...mockSheet,
  id: `${mockSheet.id}${Math.random()}`,
}));

export async function getSheets(filters?: unknown): Promise<SheetMetadata[]> {
  // const response = await callT("getSheets", filters);

  return mockList;
}

export async function deleteSheet(sheeId: string): Promise<SheetMetadata> {
  return mockList.find((value) => value.id === sheeId)!;
}
