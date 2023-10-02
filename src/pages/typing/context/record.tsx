import { createContext, useContext, useState } from "react";
import { ProviderProp } from "./type";

export type medal = "Gold" | "Silver" | "Brown" | "None";

type record_context = {
  medal: medal | null;
  best: number | null;
  recordScore: (score: number) => void;
};

const record_context = createContext<record_context | null>(null);

export const RecordProvider = ({ children }: ProviderProp) => {
  const [best, setBest] = useState<null | number>(null);
  const [medal, setMedal] = useState<null | medal>(null);

  const recordScore = (score: number): void => {
    if (best && score < best) {
      return;
    }
    setBest(score);
    if (score > 90) {
      setMedal("Gold");
      return;
    } else if (score > 80) {
      setMedal("Silver");
      return;
    } else if (score > 60) {
      setMedal("Brown");
      return;
    }
    setMedal("None");
  };

  const value = {
    best,
    medal,
    recordScore,
  };

  return (
    <record_context.Provider value={value}>{children}</record_context.Provider>
  );
};

export const useRecord = () => {
  const context = useContext(record_context);
  if (!context) {
    throw new Error("not in record provider");
  }

  return context;
};
