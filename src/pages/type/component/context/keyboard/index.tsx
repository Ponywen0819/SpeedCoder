import { createContext, useContext, useState, useEffect } from "react";
import type { ProviderProp } from "../type";
import type { KeyValue } from "./qwerty";

type layout_type = "qwerty";

export type keyboard_context = {
  layout_type: layout_type;
  visible: boolean;
  layout: keyboard_key_setting[];
  set: (layout_type: layout_type) => void;
  showKeyboard: () => void;
  hideKeyboard: () => void;
  calc_group: (string: string) => { [group: string]: boolean };
};

export type keyboard_key_setting = {
  keys: string[];
  width: number;
  group: number;
};

const keyboard_context = createContext<keyboard_context | null>(null);

const group_list = [
  [1, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8, 8, 8],
  [1, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8, 8, 8],
  [1, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8, 8],
  [1, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8],
  [1, 1, 2, 9, 6, 7, 8, 8],
].flatMap((v) => v);

const size_list = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5],
  [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.25],
  [2.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.75],
  [1.25, 1.25, 1.25, 6.25, 1.25, 1.25, 1.25, 1.25],
].flatMap((v) => v);

const gen_layout = (setting: KeyValue[]) => {
  return setting.map((v, i) => ({
    keys: v,
    width: size_list[i],
    group: group_list[i],
  }));
};

export const KeyboardProvider = ({ children }: ProviderProp) => {
  const [layout_type, setType] = useState<layout_type>("qwerty");
  const [layout, setLayout] = useState<keyboard_key_setting[]>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    import("./qwerty").then(({ layout }) => {
      setLayout(gen_layout(layout));
    });
  }, [layout_type]);

  const set = (layout_type: layout_type) => {
    setType(layout_type);
  };

  const showKeyboard = () => {
    setVisible(true);
  };

  const hideKeyboard = () => {
    setVisible(false);
  };

  const calc_group = (string: string) => {
    return {
      1:
        /[`1qaz~!QAZ]/.test(string) ||
        /[~!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?|]/.test(string),
      2: /[2wsx@WSX]/.test(string),
      3: /[3edc#EDC]/.test(string),
      4: /[$RFV%TGB4rfv5tgb]/.test(string),
      5: /[6yhn7ujm^YHN&UJM]/.test(string),
      6: /[8ik,*IK<]/.test(string),
      7: /[9ol.(OL>)]/.test(string),
      8: /[0\p\;\/\[\'\=\]\)\P\:\?\_\{\"\+\}\n-]/.test(string),
      9: / /.test(string),
    };
  };

  return (
    <keyboard_context.Provider
      value={{
        layout_type,
        layout,
        visible,
        set,
        showKeyboard,
        hideKeyboard,
        calc_group,
      }}>
      {children}
    </keyboard_context.Provider>
  );
};

export const useKeyboard = () => {
  const context = useContext(keyboard_context);
  if (!context) {
    throw new Error("not in keyboard provider");
  }
  return context;
};
