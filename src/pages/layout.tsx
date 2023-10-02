import { Outlet } from "react-router-dom";
import { Header } from "@/component/header";
import { Footer } from "@/component/footer";

export const MainLayout = () => {
  return (
    <div className="min-height d-flex flex-column">
      <Header />
      <div className="flex-grow-1 pt-2 pb-2 m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
