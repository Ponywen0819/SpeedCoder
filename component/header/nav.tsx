import { Link, useLocation } from "react-router-dom";

interface NavLinkProp {
  href: string;
  label: string;
}

const NavLink = (prop: NavLinkProp) => {
  const location = useLocation().pathname;
  return (
    <li className="d-inline mr-3 p-0">
      <Link
        className={`text-nav-link ${location === prop.href && ""}`}
        to={prop.href}>
        {prop.label}
      </Link>
    </li>
  );
};

export const Nav = () => {
  return (
    <nav className="mt-auto mb-auto">
      <ul className="m-0 p-0">
        <NavLink href="/lesson" label="Lesson" />
      </ul>
    </nav>
  );
};
