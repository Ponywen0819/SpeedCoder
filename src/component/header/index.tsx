import { Nav } from "./nav";
import { Logo } from "./logo";
import Container from "react-bootstrap/Container";
import BootstrapNavbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <BootstrapNavbar bg="dark" data-bs-theme="dark">
      <Container>
        <Logo />
        <Nav />
      </Container>
    </BootstrapNavbar>
  );
};
