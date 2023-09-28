import { createContext, useContext, useEffect } from "react";
import { ProviderProp } from "./type";
import { useInput, InputProvider } from "./intput";
import type { input_context } from "./intput";
import { useKeyboard, KeyboardProvider } from "./keyboard";
import type { keyboard_context } from "./keyboard";
import { useTimer, TimerProvider } from "./timer";
import type { timer_context } from "./timer";
import { useDocument, DocumentProvider } from "./doc";
import type { doc_context } from "./doc";

type TypeContext = {
  keyboard: keyboard_context;
  input: input_context;
  timer: timer_context;
  doc: doc_context;
  active_group: { [key: string]: boolean };
  current: string;
  reset: () => void;
};

const type_context = createContext<TypeContext | null>(null);

export const TypeProvider = ({ children }: ProviderProp) => {
  const input = useInput();
  const keyboard = useKeyboard();
  const timer = useTimer();
  const doc = useDocument();

  useEffect(() => {
    if (!timer.counting && input.buffer !== "") {
      timer.start();
    }
  }, [input.buffer]);

  useEffect(() => {
    if (input.finish) {
      timer.stop();
    }
  }, [input.finish]);

  const reset = () => {
    input?.reset();
    timer?.reset();
  };

  const current = doc.doc.replace(/\n( )*/g, "\n")[input.index] || "";
  const active_group = keyboard.calc_group(current);

  return (
    <type_context.Provider
      value={{
        doc,
        active_group,
        current,
        keyboard,
        input,
        timer,
        reset,
      }}>
      {children}
    </type_context.Provider>
  );
};

export const Providers = ({ children }: ProviderProp) => {
  return (
    <InputProvider>
      <DocumentProvider>
        <KeyboardProvider>
          <TimerProvider>
            <TypeProvider>{children}</TypeProvider>
          </TimerProvider>
        </KeyboardProvider>
      </DocumentProvider>
    </InputProvider>
  );
};

export const useType = (): TypeContext => {
  const context = useContext(type_context);
  if (!context) throw new Error("not in type provider");
  return context;
};
