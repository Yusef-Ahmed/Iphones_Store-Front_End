import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 160,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
