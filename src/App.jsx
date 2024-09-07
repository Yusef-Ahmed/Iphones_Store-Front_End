import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { Home } from "./components/HomePage/Home";
import { Auth } from "./pages/Auth";

function App() {
  const router = createBrowserRouter([
    { path: "/", 
      element: <RootLayout />, 
      children: [
      {index: true, element:<Home />},
      {path:'auth', element:<Auth />},
    ]},
  ]);

  return <RouterProvider router={router} />;
}

export default App;
