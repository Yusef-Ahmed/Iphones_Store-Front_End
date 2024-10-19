import { redirect } from "react-router-dom";

// export function getTokenDuration() {
//   const storedExpiration = localStorage.getItem("expiration");
//   const expiration = new Date(storedExpiration);
//   const current = new Date();

//   return expiration - current;
// }

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) return null;

  // if (getTokenDuration() < 0) return "EXPIRED";

  return token;
}

export function authLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) return redirect("/auth");

  return null;
}
