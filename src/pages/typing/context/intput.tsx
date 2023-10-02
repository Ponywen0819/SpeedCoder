import { createContext, useContext, useState, useEffect, useRef } from "react";
import { ProviderProp } from "./type";

export type input_context = {
  index: number;
  buffer: string;
  finish: boolean;
  correct: number;
  max: number | null;
  reset: () => void;
  init: (id: number) => void;
};

const input_context = createContext<input_context | null>(null);

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

  useEffect(() => {
    if (index === max) {
      setFinish(true);
    }
  }, [index]);

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

  const value: input_context = {
    index,
    buffer,
    finish,
    correct: correct_num.current,
    max,
    reset,
    init,
  };
  return (
    <input_context.Provider value={value}>{children}</input_context.Provider>
  );
};

export const useInput = () => {
  const context = useContext(input_context);
  if (!context) {
    throw new Error("not in Input provider");
  }
  return context;
};
