// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod greet;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet::greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
