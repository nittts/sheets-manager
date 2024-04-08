import { LoginPayload, RegisterPayload } from "@/@types/auth";
import callT from "@/utils/lib/tauri";

export async function loginSvc(payload: LoginPayload) {
  const response = await callT("login", payload);

  return response;
}

export async function registerSvc(payload: RegisterPayload) {
  const response = await callT("register", payload);

  return response;
}
