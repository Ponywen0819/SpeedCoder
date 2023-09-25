import { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

type example_context = {};

export const example_context = createContext<example_context | null>(null);

export const ExampeleProvider = () => {
  return <example_context.Provider value={{}}></example_context.Provider>;
};

export const useExample = () => {
  const  useContext(example_context);
};
