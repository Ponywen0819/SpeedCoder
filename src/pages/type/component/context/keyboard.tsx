import { createContext, useContext, useState, useEffect } from "react";
import type { ProviderProp } from "./type";

type layout_type = "qwerty";

export type keyboard_context = {
  layout_type: layout_type;
  visible: boolean;
  set: (layout_type: layout_type) => void;
  showKeyboard: () => void;
  hideKeyboard: () => void;
} | null;

const keyboard_context = createContext<keyboard_context>(null);

export const KeyboardProvider = ({ children }: ProviderProp) => {
  const [layout_type, setLayout] = useState<layout_type>("qwerty");
  const [visible, setVisible] = useState(true);

  const set = (layout_type: layout_type) => {
    setLayout(layout_type);
  };

  const showKeyboard = () => {
    setVisible(true);
  };

  const hideKeyboard = () => {
    setVisible(false);
  };

  return (
    <keyboard_context.Provider
      value={{
        layout_type,
        visible,
        set,
        showKeyboard,
        hideKeyboard,
      }}>
      {children}
    </keyboard_context.Provider>
  );
};

export const useKeyboard = () => {
  return useContext(keyboard_context);
};
