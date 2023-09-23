import { Route } from "react-router-dom";

export const LessonRoute = (
  <Route path="lesson" lazy={() => import("./page")} />
);
