import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { Auth } from "./pages/Auth";
import { TeamSection } from "./components/TeamSection";
import Error from "./pages/Error";
import { loader as cardsLoader } from "./components/Cards";
import { Product, loader as productLoader } from "./components/Product";
import { HomeHeader } from "./components/HomeHeader";
import { Products } from "./components/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <HomeHeader /> },
        { path: "auth", element: <Auth /> },
        { path: "teamSection", element: <TeamSection /> },
        {
          path: "products",
          children: [
            { index: true, element: <Products />, loader: cardsLoader },
            { path: ":id", element: <Product />, loader: productLoader },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
