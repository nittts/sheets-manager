import { Permissions } from "@/enums/permissions";

export class PermissionsUtils {
  public static isAllowed(
    userPermissions: Permissions[],
    permission?: Permissions
  ) {
    if (!permission) return true;

    return userPermissions.includes(permission);
  }
}
