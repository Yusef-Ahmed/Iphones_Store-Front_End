import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { Auth, authAction } from "./pages/Auth";
import { TeamSection } from "./pages/TeamSection";
import Error from "./pages/Error";
import { loader as cardsLoader } from "./pages/Products.jsx";
import { Product, loader as productLoader } from "./pages/Product";
import { HomeHeader } from "./pages/Home.jsx";
import { Products } from "./pages/Products";
import {
  accessAuthLoader,
  authLoader,
  checkAuthLoader,
} from "../util/auth.jsx";
import { logoutAction } from "./pages/LogOut.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      id: "root",
      element: <RootLayout />,
      errorElement: <Error />,
      loader: authLoader,
      children: [
        { index: true, element: <HomeHeader /> },
        {
          path: "auth",
          element: <Auth />,
          loader: accessAuthLoader,
          action: authAction,
        },
        { path: "teamSection", element: <TeamSection /> },
        {
          path: "products",
          loader: checkAuthLoader,
          children: [
            {
              index: true,
              element: <Products />,
              loader: cardsLoader,
            },
            {
              path: ":id",
              element: <Product />,
              loader: productLoader,
            },
          ],
        },
        { path: "logout", action: logoutAction },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
