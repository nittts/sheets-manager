import { VNode } from "million";
import { JSXInternal } from "node_modules/preact/src/jsx";
import { ReactNode } from "preact/compat";

export type IComponentCommonProps = {
  className?: string;
  children?: ReactNode | VNode;
};

export type IImagesPane = IComponentCommonProps & {
  images: string[];
  direction?: "row" | "column";
};

export type IImage = JSXInternal.HTMLAttributes<HTMLImageElement>;

export type ITextField = JSXInternal.HTMLAttributes<HTMLInputElement> & {
  label: ReactNode | VNode | string;
  infoIcon?: ReactNode | VNode;
  customIcon?: ReactNode | VNode;
  iconPos?: "start" | "end";
  state?: "error" | "warn" | "success";
  inputSize?: "small" | "large";
  helperText?: ReactNode | VNode | string;
};

export type IButton = JSXInternal.HTMLAttributes<HTMLButtonElement>;
