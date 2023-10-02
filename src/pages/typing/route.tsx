import { Route } from "react-router-dom";
import { Component } from "./page";

export const TypeRoute = (
  // <Route path="type/:name" lazy={() => import("./page")} />

  <Route path="type/:name" element={<Component />} />
);
