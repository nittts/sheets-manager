import { Languages } from "@/@types/preferences";

export class LangUtils {
  public static async getTranslationFile(lang: Languages) {
    const languageFile: Record<string, string> = await import(`@/translations/${lang}.json`);

    if (!languageFile) {
      return {};
    }

    return languageFile;
  }
}
