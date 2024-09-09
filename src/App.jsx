import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { Home } from "./components/HomePage/Home";
import { Auth } from "./pages/Auth";
import { TeamSection } from "./components/TeamSection";
import Error from "./pages/Error";
import { loader as cardsLoader } from "./components/HomePage/Cards";
import {Product, loader as productLoader } from "./components/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home />, loader: cardsLoader },
        { path: "auth", element: <Auth /> },
        { path: "teamSection", element: <TeamSection /> },
        { path: "product/:id", element: <Product />, loader: productLoader },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
