import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";

export interface TypeContext {
  enable_keyboard: boolean;
  setKeyboard: Dispatch<SetStateAction<boolean>>;
}

interface TypeProviderProp {
  children: ReactNode;
}

const type_context = createContext<TypeContext | null>(null);

export const TypeProvider = ({ children }: TypeProviderProp) => {
  const [enable_keyboard, setKeyboard] = useState(true);

  const value = {
    enable_keyboard,
    setKeyboard,
  };
  return (
    <type_context.Provider value={value}>{children}</type_context.Provider>
  );
};

export const useType = (): TypeContext | null => {
  return useContext(type_context);
};
