import { Outlet } from "react-router-dom";
import { Header } from "@/component/header";
import { Footer } from "@/component/footer";
import Container from "react-bootstrap/Container";

export const MainLayout = () => {
  return (
    <div className="min-height d-flex flex-column">
      <Header />
      <Container className="flex-grow-1 pt-2 pb-2">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};
