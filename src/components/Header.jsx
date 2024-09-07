import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const navigation = [
  { name: "Products", to: "/" },
  { name: "Features", to: "#" },
  { name: "Marketplace", to: "#" },
  { name: "Us", to: "/teamSection" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-1 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img alt="" src={logo} className="h-24 w-auto" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="text-lg font-semibold leading-6"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="auth?mode=login"
            className="text-lg font-semibold leading-6"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
