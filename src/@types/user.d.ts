import { Permissions } from "@/enums/permissions";
import { roles } from "@/enums/roles";

export type IUser = {
  id: string;
  name: string;
  login: string;
  permissons: Permissions[];
  role: roles;
};
