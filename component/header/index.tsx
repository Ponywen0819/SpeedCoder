import { Nav } from "./nav";
import { Logo } from "./logo";
import { Menu } from "./menu";

import "@/scss/component/header.scss";

export const Header = () => {
  return (
    <header className="bg-header pt-2 pb-2 mb-3">
      <div className="max-width d-flex gap-3">
        <Logo />
        <Nav />
        <Menu />
      </div>
    </header>
  );
};
