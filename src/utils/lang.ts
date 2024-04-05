import { Languages } from "@/@types/preferences";

export class LangUtils {
  public static async getTranslationFile(lang: Languages) {
    const languageFile: Record<string, string> = await import(
      `@/translations/${lang}.json`
    );

    if (!languageFile) {
      return {};
    }

    return languageFile;
  }

  public static listAllLanguages() {
    const files = Object.keys(import.meta.glob("@/translations/*.json"));

    return files.map(this.extractLanguageAbbreviation);
  }

  private static extractLanguageAbbreviation(path: string) {
    const jsonIdx = path.indexOf(".json");

    return path.substring(jsonIdx - 2, jsonIdx);
  }
}
