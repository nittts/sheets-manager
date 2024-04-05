import { roles } from "@/enums/roles";

export class RolesUtils {
  public static isAllowed(userRole: roles, role?: roles) {
    return role === userRole;
  }
}
