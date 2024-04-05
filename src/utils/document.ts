import { appWindow } from "@tauri-apps/api/window";

export class DocumentUtils {
  public static setWindowTitle(title: string) {
    if ((window as any).__TAURI__) appWindow.setTitle(title);
    if (window) window.document.title === title;
  }
}
