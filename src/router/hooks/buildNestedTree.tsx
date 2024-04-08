import { IRoute } from "@/@types/routes";
import { Route } from "react-router-dom";
import PageElement from "../elements/page.element";

export default function buildNestedTree(route: IRoute) {
  if (!route.children) return null;

  return route.children.map((nestedRoute) => (
    <Route path={`${route.path}/${nestedRoute.path}`} element={<PageElement route={nestedRoute} />} />
  ));
}
