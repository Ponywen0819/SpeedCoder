import { Outlet } from "react-router-dom";
import { Header } from "@/component/header";
import { Footer } from "@/component/footer";

import "@/scss/layout/main.scss";

export const MainLayout = () => {
  return (
    <div className="sz-min-page d-flex flex-column">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
