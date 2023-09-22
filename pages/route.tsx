import { Route } from "react-router-dom";
import { MainLayout } from "./layout";
import { ErrorPage } from "./error";
import { IndexRoute } from "./index/route";
import { LessonRoute } from "./lessons/route";

export const MainRoute = (
  <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
    {IndexRoute}
    {LessonRoute}
  </Route>
);
