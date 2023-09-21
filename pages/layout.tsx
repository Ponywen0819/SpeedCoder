import { Outlet } from "react-router-dom";
import { Header } from "@/component/header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
