import { redirect } from "react-router-dom";
import { clear, getAuthToken } from "../../util/auth";

export async function logoutAction() {
  const token = getAuthToken();
  await fetch("http://localhost:5000/user/logOut", {
    method: "POST",
    headers: { "Content-type": "application/json", authorization: token },
  });

  clear();

  return redirect("/");
}
