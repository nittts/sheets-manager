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

const LanguageContext = createContext<Record<string, string>>({});

function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useLang();
  const [languageFile, setLanguageFile] = useState({});

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
