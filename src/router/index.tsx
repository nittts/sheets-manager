import { IRoute } from "@/@types/routes";

import { Suspense } from "preact/compat";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageElement from "./elements/page.element";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import { AnimatePresence } from "framer-motion";

export function Router({ routes = [] }: { routes: IRoute[] }) {
  return (
    <AnimatePresence>
      <Suspense fallback={<LoadingOverlay />}>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.path}
                element={<PageElement route={route} />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </AnimatePresence>
  );
}
