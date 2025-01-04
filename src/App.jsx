import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { Auth, authAction } from "./pages/Auth";
import { TeamSection } from "./components/TeamSection";
import Error from "./pages/Error";
import { loader as cardsLoader } from "./components/Cards";
import { Product, loader as productLoader } from "./components/Product";
import { HomeHeader } from "./components/HomeHeader";
import { Products } from "./components/Products";
import { authLoader, checkAuthLoader } from "../util/auth.jsx";
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
        { path: "auth", element: <Auth />, action: authAction },
        { path: "teamSection", element: <TeamSection /> },
        {
          path: "products",
          loader: checkAuthLoader,
          // action: deleteAction,
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
        // {
        //   path: "edit/:id",
        //   element: <EditProduct />,
        //   action: editProductAction,
        //   loader: productLoader,
        // },
        // {
        //   path: "add-product",
        //   element: <AddProduct />,
        //   action: addProductAction,
        // },
        { path: "logout", action: logoutAction },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
