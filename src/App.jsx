import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { Home } from "./components/HomePage/Home";
import { Auth } from "./pages/Auth";
import { TeamSection } from "./components/TeamSection";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "auth", element: <Auth /> },
        { path: "/teamSection", element: <TeamSection /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
