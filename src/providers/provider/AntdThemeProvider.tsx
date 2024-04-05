import { usePreferences } from "@/stores/preferences";
import { ConfigProvider, theme } from "antd";
import { ReactNode } from "preact/compat";
import { presetPrimaryColors } from "@ant-design/colors";

const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;

const algorithmDict = {
  LIGHT: defaultAlgorithm,
  DARK: darkAlgorithm,
  COMPACT_LIGHT: [compactAlgorithm, defaultAlgorithm],
  COMPACT_DARK: [compactAlgorithm, darkAlgorithm],
};

function AntdThemeProvider({ children }: { children: ReactNode }) {
  const { mode, accent } = usePreferences();

  const algorithm = algorithmDict[mode];
  const token = {
    colorPrimary: presetPrimaryColors[accent],
    colorText: mode.includes("DARK") ? "#FFF" : "#000",
  };

  return (
    <ConfigProvider theme={{ algorithm, token }}>
      {children}
    </ConfigProvider>
  );
}

export default AntdThemeProvider;
