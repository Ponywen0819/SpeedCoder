import { Route } from "react-router-dom";

export const IndexRoute = <Route index lazy={() => import("./page.tsx")} />;
