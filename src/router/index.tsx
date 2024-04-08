import { IRoute } from "@/@types/routes";

import { Suspense } from "preact/compat";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageElement from "./elements/page.element";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import { AnimatePresence } from "framer-motion";
import buildNestedTree from "./hooks/buildNestedTree";

export function Router({ routes = [] }: { routes: IRoute[] }) {
  const routesMap = () =>
    routes.map((route) => (
      <Route path={route.path} element={<PageElement route={route} />}>
        {buildNestedTree(route)}
      </Route>
    ));

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
