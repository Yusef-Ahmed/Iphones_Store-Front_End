import { redirect } from "react-router-dom";
import { AuthForm } from "../components/AuthForm";

export function Auth() {
  return <AuthForm />;
}

export async function authAction({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "logIn";
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  if (mode === "signUp") authData.name = data.get("name");

  const response = await fetch("http://localhost:5000/user/" + mode, {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(authData),
  });

  // console.log(response.ok);
  // if (response.status === 404) {
  //   return response;
  // }
  
  const resData = await response.json();
  
  if (!response.ok) {
    return resData;
  }

  const token = resData.token;

  // store the token in the local storage
  localStorage.setItem('token', token);

  // // store the token's expire date
  // const expiration = new Date();
  // expiration.setHours(expiration.getHours() + 1);
  // localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/products');
}
