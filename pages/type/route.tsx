import { Route } from "react-router-dom";

export const TypeRoute = (
  <Route path="type/:name" lazy={() => import("./page")} />
);
