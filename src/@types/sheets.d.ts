import { Key } from "preact";
import { Colors } from "./preferences";

export type SheetInfo = {
  name: string;
  description: string;
  createdAt: string;
};

export type SheetTag = { tag: string; color: Colors };

export type SheetMetadata = {
  id: string;
  tags: SheetTag[];
} & SheetInfo;
