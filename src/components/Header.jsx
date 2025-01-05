import { Form, Link, NavLink, useRouteLoaderData } from "react-router-dom";
import logo from "../assets/NewLogo.png";

const navigation = [
  { name: "Products", to: "/products" },
  // { name: "Favorites", to: "/auth" },
  // { name: "Promotion", to: "/auth" },
  { name: "About Us", to: "/teamSection" },
];

export function Header() {
  const loggedIn = useRouteLoaderData("root");
  
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-1 lg:px-8"
      >
        <div className="flex flex-1">
          <Link
            to="/"
            className="-m-1.5 p-1.5 transition delay-0 hover:scale-125 duration-300 will-change-transform"
          >
            <img alt="logo" src={logo} className="w-auto h-28 mt-2" />
          </Link>
        </div>
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                (isActive
                  ? "underline underline-offset-8 text-xl"
                  : "text-lg") +
                " will-change-transform font-semibold transition delay-0 hover:-translate-y-1 hover:scale-110 duration-300"
              }
            >
              {item.name}
            </NavLink>
          ))}
          
        </div>
        <div className="flex justify-end flex-1">
          {loggedIn ? (
            <Form action="/logout" method="post">
              <button className="text-lg font-semibold leading-6 transition duration-300 will-change-transform delay-0 hover:-translate-y-1 hover:scale-110">
                Logout
              </button>
            </Form>
          ) : (
            <Link
              to="auth?mode=logIn"
              className="text-lg font-semibold leading-6 transition duration-300 will-change-transform delay-0 hover:-translate-y-1 hover:scale-110"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
