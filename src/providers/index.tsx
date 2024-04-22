import { ReactNode } from "preact/compat";
import AntdThemeProvider from "./provider/AntdThemeProvider";
import LanguageProvider from "./provider/LanguageProvider";
import SnackBarProvider from "./provider/SnackBarProvider";
import ToastProvider from "./provider/ToastProvider";
import TanStackProvider from "./provider/TanStackProvider";

function Providers({ children }: { children: ReactNode }) {
  return (
    <AntdThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          <SnackBarProvider>
            <TanStackProvider>{children}</TanStackProvider>
          </SnackBarProvider>
        </ToastProvider>
      </LanguageProvider>
    </AntdThemeProvider>
  );
}

export default Providers;
