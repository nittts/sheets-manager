import { Permissions } from "@/enums/permissions";
import { roles } from "@/enums/roles";

export type IAccounts = {
  id: string;
  nickname: string;
  account: string;
  password: string;
  permissons: Permissions[];
  role: roles;
};
