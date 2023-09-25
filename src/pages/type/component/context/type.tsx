import type { ReactNode } from "react";

export type ProviderProp = {
  children: ReactNode;
};

export type CharComponentSetting = {
  id: number;
  key: number;
  char: ReactNode;
};
