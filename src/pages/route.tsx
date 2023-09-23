import { Route } from "react-router-dom";
import { MainLayout } from "./layout";
import { ErrorPage } from "./error";
import { IndexRoute } from "./index/route";
import { LessonRoute } from "./lessons/route";
import { TypeRoute } from "./type/route";

export const MainRoute = (
  <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
    {IndexRoute}
    {LessonRoute}
    {TypeRoute}
  </Route>
);
