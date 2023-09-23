import BootstrapNavbar from "react-bootstrap/Navbar";
import { LightningChargeFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <BootstrapNavbar.Brand>
      <Link to={"/"}>
        <LightningChargeFill />
        SpeedCoder
      </Link>
    </BootstrapNavbar.Brand>
  );
};
