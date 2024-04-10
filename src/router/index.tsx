import { IRoute } from "@/@types/routes";

import { Suspense, useMemo } from "preact/compat";
import { BrowserRouter, Routes } from "react-router-dom";

import LoadingOverlay from "@/components/ui/LoadingOverlay";
import { AnimatePresence } from "framer-motion";
import buildNestedTree from "./hooks/buildNestedTree";

export function Router({ routes = [] }: { routes: IRoute[] }) {
  const routesMap = useMemo(() => buildNestedTree(routes), [routes]);

  return (
    <AnimatePresence>
      <Suspense fallback={<LoadingOverlay />}>
        <BrowserRouter>
          <Routes>{routesMap}</Routes>
        </BrowserRouter>
      </Suspense>
    </AnimatePresence>
  );
}
