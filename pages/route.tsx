import { Route } from "react-router-dom";
import { IndexRoute } from "./index/route";
import { MainLayout } from "./layout";
import { PageNotFound } from "./not-found";

export const MainRoute = (
  <Route path="/" element={<MainLayout />} errorElement={<PageNotFound />}>
    {IndexRoute}
  </Route>
);
