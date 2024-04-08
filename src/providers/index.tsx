import { ReactNode } from "preact/compat";
import AntdThemeProvider from "./provider/AntdThemeProvider";
import LanguageProvider from "./provider/LanguageProvider";
import SnackBarProvider from "./provider/SnackBarProvider";
import ToastProvider from "./provider/ToastProvider";

function Providers({ children }: { children: ReactNode }) {
  return (
    <AntdThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          <SnackBarProvider>{children}</SnackBarProvider>
        </ToastProvider>
      </LanguageProvider>
    </AntdThemeProvider>
  );
}

export default Providers;
