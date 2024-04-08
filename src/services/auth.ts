import { LoginPayload } from "@/@types/auth";
import callT from "@/utils/lib/tauri";

export function loginSvc({ account, password }: LoginPayload) {
  const greet = callT("greet");

  return greet;
}
