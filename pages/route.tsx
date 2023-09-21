import { Route } from "react-router-dom";
import { IndexRoute } from "./index/route";
import { MainLayout } from "./layout";

export const MainRoute = (
  <Route path="/" element={<MainLayout />}>
    {IndexRoute}
  </Route>
);
