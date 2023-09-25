import { createContext, useContext, useState, useEffect, useRef } from "react";
import { ProviderProp, CharComponentSetting } from "./type";
import { useLocation } from "react-router-dom";
import useSWR from "swr";

export type input_context = {
  index: number;
  buffer: string;
  finish: boolean;
  correct: number;
  reset: () => void;
  init: (id: number) => void;
};

const input_context = createContext<input_context | null>(null);

const format_string = (data: string): CharComponentSetting[] => {
  const res = [];

  let include = true;
  let index = 0;
  let key = 0;
  for (const char of data.split("")) {
    if (char === " " && !include) {
      res.push({
        id: -1,
        key,
        char,
      });
    } else {
      res.push({
        id: index,
        key,
        char,
      });
      index++;
      include = char !== "\n";
    }
    key++;
  }

  return res;
};

export const InputProvider = ({ children }: ProviderProp) => {
  const [index, setIndex] = useState(0);
  const [buffer, setBuffer] = useState("");
  const [finish, setFinish] = useState(false);
  const [max, setMax] = useState<number | null>(null);
  const correct_num = useRef(0);

  useEffect(() => {
    if (!finish) {
      addEventListener("keydown", input_handler);
    }
    return () => {
      removeEventListener("keydown", input_handler);
    };
  }, [finish]);

  useEffect(() => {
    if (index === max) {
      setFinish(true);
    }
  }, [index]);

  const input_handler = (event: KeyboardEvent) => {
    if (event.ctrlKey) {
      return;
    }

    event.preventDefault();
    const valid_reg = /^.$/;
    const current = event.key;
    if (valid_reg.test(current)) {
      setIndex((old) => old + 1);
      setBuffer((old) => `${old}${current}`);
    } else if (current === "Enter") {
      setIndex((old) => old + 1);
      setBuffer((old) => `${old}${"\n"}`);
    } else if (current === "Backspace") {
      deleteText();
    }
  };

  const init = (id: number) => {
    setMax(id);
  };

  const deleteText = () => {
    setIndex((old) => {
      return old <= 1 ? 0 : old - 1;
    });
    setBuffer((old) => old.slice(0, -1));
  };

  const reset = () => {
    setIndex(0);
    setBuffer("");
    setFinish(false);
    correct_num.current = 0;
  };

  return (
    <input_context.Provider
      value={{
        index,
        buffer,
        finish,
        correct: correct_num.current,
        reset,
        init,
      }}>
      {children}
    </input_context.Provider>
  );
};

export const useInput = () => {
  const context = useContext(input_context);
  if (!context) {
    throw new Error("not in Input provider");
  }
  return context;
};
