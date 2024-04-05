import { ReactNode } from "preact/compat";
import AntdThemeProvider from "./provider/AntdThemeProvider";
import LanguageProvider from "./provider/LanguageProvider";

function Providers({ children }: { children: ReactNode }) {
  return (
    <AntdThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </AntdThemeProvider>
  );
}

export default Providers;
