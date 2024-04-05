import * as colors from "@ant-design/colors";
import { useAccent } from "@/stores/preferences";
import { ReactNode } from "preact/compat";
import { AnimatePresence, motion } from "framer-motion";

type directions = "BL_TR" | "TL_BR" | "BR_TL";

const baseStyle = {
  position: "fixed",
  top: "-100%",
  left: "-100%",
  width: "500vw",
  height: "500vh",
};

const baseTransition = {
  duration: 2,
  stiffness: 100,
};

const directionsMap = {
  BL_TR: { x: "100%", y: "-100%" },
  TL_BR: { x: "100%", y: "100%" },
  BR_TL: { x: "-100%", y: "-100%" },
};

function OverlaySheets({ direction = "BR_TL" }: { direction?: directions }) {
  const accent = useAccent();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ rotate: 45 }}
        animate={directionsMap[direction]}
        transition={{ delay: 0.07, ...baseTransition }}
        style={{ ...baseStyle, backgroundColor: "#FFF" }}
        key="sheet1"
      />
      <motion.div
        initial={{ rotate: 45 }}
        animate={directionsMap[direction]}
        transition={{ delay: 0.05, ...baseTransition }}
        style={{ ...baseStyle, backgroundColor: "#000" }}
        key="sheet2"
      />
      <motion.div
        initial={{ rotate: 45 }}
        animate={directionsMap[direction]}
        transition={baseTransition}
        style={{ ...baseStyle, backgroundColor: colors[accent].primary }}
        key="sheet3"
      />
    </AnimatePresence>
  );
}

function PageTransition({ children, hideTransition }: { children: ReactNode, hideTransition?: boolean }) {
  return (
    <>
      {!hideTransition && <OverlaySheets />}
      {children}
    </>
  );
}
export default PageTransition;
