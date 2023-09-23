import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { MainRoute } from "./pages/route";

import "@/assets/style.scss";

const root = createRoot(document.getElementById("root")!);

const router = createBrowserRouter(createRoutesFromElements(MainRoute));

root.render(<RouterProvider router={router} />);
