import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { ProviderProp } from "./type";
import useSWR from "swr";

export type doc_context = {
  doc: string;
};

const doc_context = createContext<doc_context | null>(null);

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.text())
    .then((text) => text.replace(/\r\n/g, "\n"));

const getLan = (): string => {
  const { pathname } = useLocation();
  return pathname.split("/")[2];
};
const number = Math.round(Math.random() + 1);

export const DocumentProvider = ({ children }: ProviderProp) => {
  const { data: doc } = useSWR(
    `/example/example_${number}.${getLan()}`,
    fetcher
  );

  const context: doc_context = {
    doc: doc || "",
  };

  return (
    <doc_context.Provider value={context}>{children}</doc_context.Provider>
  );
};

export const useDocument = () => {
  const context = useContext(doc_context);
  if (!context) {
    throw new Error("not in doc provider");
  }
  return context;
};
