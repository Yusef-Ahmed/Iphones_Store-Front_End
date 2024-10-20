import { redirect } from "react-router-dom";
import { getAuthToken } from "../../util/auth";

export async function logoutAction() {
  const token = getAuthToken();
  await fetch("http://localhost:5000/user/logOut", {
    method: "POST",
    headers: { "Content-type": "application/json", authorization: token },
  });

  // const resData = await response.json();

  // if (!response.ok) {
  //   console.log(resData);
  //   return resData;
  // }

  localStorage.removeItem("token");
  localStorage.removeItem("role");
  // localStorage.removeItem("expiration");

  return redirect("/");
}
