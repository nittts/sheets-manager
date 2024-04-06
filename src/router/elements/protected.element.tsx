import { IRoute } from "@/@types/routes";
import { useAccount } from "@/stores/account";
import { ErrorsUtils } from "@/utils/errors";
import { PermissionsUtils } from "@/utils/permissions";
import { RolesUtils } from "@/utils/roles";
import { useNavigate } from "react-router-dom";

export default function ProtectedElement({ route }: { route: IRoute }) {
  const navigate = useNavigate();
  const account = useAccount();

  const { element: Element, minimumRole, permissionLevel } = route;

  if (!RolesUtils.isAllowed(account.role, minimumRole)) {
    navigate("/403", { state: ErrorsUtils.throw("R01") });
    return null;
  }

  if (!PermissionsUtils.isAllowed(account.permissons, permissionLevel)) {
    navigate("/403", { state: ErrorsUtils.throw("P01") });
    return null;
  }

  return <Element />;
}
