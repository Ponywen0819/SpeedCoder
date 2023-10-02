import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
export type timer_context = {
  sec: number;
  counting: boolean;
  start: () => void;
  stop: () => void;
  reset: () => void;
};

const timer_context = createContext<timer_context | null>(null);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [counting, setCounting] = useState(false);
  const [sec, setSec] = useState(0);

  const updateSec = () => {
    setSec((old) => old + 1);
  };

  useEffect(() => {
    if (counting === true) {
      const id = setInterval(updateSec, 1000);
      return () => clearInterval(id);
    }
  }, [counting, sec]);

  const start = () => {
    setCounting(true);
    setSec(0);
  };

  const stop = () => {
    setCounting(false);
  };

  const reset = () => {
    setCounting(false);
    setSec(0);
  };

  const context: timer_context = {
    sec,
    counting,
    reset,
    stop,
    start,
  };

  return (
    <timer_context.Provider value={context}>{children}</timer_context.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(timer_context);
  if (!context) {
    throw new Error("not in Timer provider");
  }
  return context;
};
