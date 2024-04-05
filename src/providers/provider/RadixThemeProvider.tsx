import { Theme } from "@radix-ui/themes";
import { ReactNode } from "preact/compat";

import "@radix-ui/themes/styles.css";

function RadixThemeProvider({ children }: { children: ReactNode }) {
  return <Theme>{children}</Theme>;
}

export default RadixThemeProvider;
