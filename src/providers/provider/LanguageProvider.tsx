import { Languages } from "@/@types/preferences";
import { useLang } from "@/stores/preferences";
import { LangUtils } from "@/utils/lang";
import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

const fetchLang = async (lang: Languages) => {
  if (lang) {
    return await LangUtils.getTranslationFile(lang);
  }

  return await LangUtils.getTranslationFile("us");
};

type languageContext = {
  [x: string]: any;
};

const LanguageContext = createContext<languageContext>({});

function LanguageProvider({ children }: { children: ReactNode }) {
  const [languageFile, setLanguageFile] = useState<languageContext>({});
  const lang = useLang();

  const updateLanguageFile = async (newLanguage: Languages) => {
    const newLang = await fetchLang(newLanguage);
    setLanguageFile(newLang);
  };

  useEffect(() => {
    updateLanguageFile(lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={languageFile}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
