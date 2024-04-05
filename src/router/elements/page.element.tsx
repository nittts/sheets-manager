import { useEffect } from "preact/hooks";

import { IRoute } from "@/@types/routes";
import { DocumentUtils } from "@/utils/document";

import ProtectedElement from "./protected.element";
import PageTransition from "@/components/ui/PageTransition";

export default function PageRoute({ route }: { route: IRoute }) {
  const { header, hideTransition } = route;

  useEffect(() => {
    DocumentUtils.setWindowTitle(header);
  }, [header]);

  return (
    <PageTransition hideTransition={hideTransition}>
      <ProtectedElement route={route} />
    </PageTransition>
  );
}
