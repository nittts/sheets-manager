import { invoke } from "@tauri-apps/api";

export default function callT(command: string, value?: any) {
  return invoke(command, value);
}
