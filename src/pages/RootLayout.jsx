import { Outlet } from "react-router-dom";
import { Header } from "../components/HomePage/Header";

export function RootLayout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );
}
