import BootstrapNavbar from "react-bootstrap/Navbar";
import BootstrapNav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

export const Nav = () => {
  return (
    <BootstrapNavbar.Collapse>
      <BootstrapNav>
        <LinkContainer to={"/lesson"}>
          <BootstrapNav.Link>Lesson</BootstrapNav.Link>
        </LinkContainer>
      </BootstrapNav>
    </BootstrapNavbar.Collapse>
  );
};
