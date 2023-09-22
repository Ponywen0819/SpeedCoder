import { Route } from "react-router-dom";
import { IndexRoute } from "./index/route";
import { MainLayout } from "./layout";
import { ErrorPage } from "./error";

export const MainRoute = (
  <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
    {IndexRoute}
  </Route>
);
