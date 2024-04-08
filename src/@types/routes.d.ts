import { Permissions } from "@/enums/permissions";
import { roles } from "@/enums/roles";
import { ComponentChild } from "preact";
import { ReactElement, ReactNode } from "preact/compat";

export type IRoute = {
  path: string;
  header: string;
  element: () => JSXInternal.Element;
  icon?: LucideIcon;
  permissionLevel?: Permissions;
  minimumRole?: roles;
  hideTransition?: boolean;
  children?: IRoute[];
};
