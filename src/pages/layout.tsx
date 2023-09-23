import { Outlet } from "react-router-dom";
import { Header } from "@/component/header";
import { Footer } from "@/component/footer";

export const MainLayout = () => {
  return (
    <div className="sz-min-page d-flex flex-column">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
