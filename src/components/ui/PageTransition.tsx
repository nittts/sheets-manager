import * as colors from "@ant-design/colors";
import { useAccent } from "@/stores/preferences";
import { ReactNode, useEffect, useState } from "preact/compat";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type PageTransitionProps = {
  children: ReactNode;
  hideTransition?: boolean;
};

const baseStyle = {
  position: "fixed",
  top: "-100%",
  left: "-100%",
  width: "500vw",
  height: "500vh",
};

const baseTransition = {
  duration: 1,
};

const directionsMap = {
  BL_TR: { x: "100%", y: "-100%" },
  TL_BR: { x: "100%", y: "100%" },
  BR_TL: { x: "-100%", y: "-100%" },
};

function PageTransition({ children, hideTransition }: PageTransitionProps) {
  const accent = useAccent();
  const location = useLocation();

  const [loaded, setLoaded] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");

  useEffect(() => {
    setPrevLoc(location.pathname);
    setLoaded(false);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 250);
  }, [prevLoc]);

  if (hideTransition) return children;

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          initial={{ rotate: 45, ...directionsMap["BR_TL"] }}
          exit={directionsMap["TL_BR"]}
          animate={{ x: 0, y: 0 }}
          transition={baseTransition}
          style={{ ...baseStyle, backgroundColor: "#FFF" }}
          key="sheet1"
        />
      )}
      {!loaded && (
        <motion.div
          initial={{ rotate: 45, ...directionsMap["BR_TL"] }}
          exit={directionsMap["TL_BR"]}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 0.02, ...baseTransition }}
          style={{ ...baseStyle, backgroundColor: "#000" }}
          key="sheet2"
        />
      )}
      {!loaded && (
        <motion.div
          initial={{ rotate: 45, ...directionsMap["BR_TL"] }}
          exit={directionsMap["TL_BR"]}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 0.03, ...baseTransition }}
          style={{ ...baseStyle, backgroundColor: colors[accent].primary }}
          key="sheet3"
        />
      )}

      {children}
    </AnimatePresence>
  );
}
export default PageTransition;
