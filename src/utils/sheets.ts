import { SheetMetadata } from "@/@types/sheets";
import { ArrayUtils } from "./array";

export class SheetsUtils {
  public static extractSheetsTags(sheets: SheetMetadata[]) {
    const tags = [];

    for (let i = 0; i < sheets.length; ++i) {
      const curSheet = sheets[i];

      if (curSheet.tags) {
        tags.push(...curSheet.tags);
      }
    }

    return ArrayUtils.findUniqueOnObjectArr(tags, 'tag');
  }
}
