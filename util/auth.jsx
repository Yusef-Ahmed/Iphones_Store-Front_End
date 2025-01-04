import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpiration = localStorage.getItem("expiration");
  const expiration = new Date(storedExpiration);
  const current = new Date();

  return expiration - current;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token || getTokenDuration() < 0) return null;

  return token;
}

export function authLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    clear();
    return redirect("/auth");
  }

  return null;
}

function clear() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("expiration");
}
