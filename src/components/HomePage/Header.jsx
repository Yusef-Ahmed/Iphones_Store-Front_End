import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "navLink")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "navLink")}
          to="/auth?mode=login"
        >
          Log In
        </NavLink>
      </li>
    </header>
  );
}
