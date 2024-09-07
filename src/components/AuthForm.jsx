import { Form, Link, useSearchParams } from "react-router-dom";

export function AuthForm() {
  const [searchParams] = useSearchParams();
  const logIn = searchParams.get("mode") === "login";

  return (
    <Form className="form">
      <h1>{logIn ? "Log In" : "Sign Up"}</h1>
      <section>
        <label>Email</label>
        <input type="text" placeholder="Enter valid email"></input>
      </section>
      <section>
        <label>Password</label>
        <input type="password" placeholder="Enter valid password"></input>
      </section>
      <section>
        <button>Submit</button>
      </section>
      <section>
        {logIn ? "Doesn't" : "Already"} have an email?{" "}
        <Link to={"/auth?mode=" + (logIn ? "signup" : "login")} className="active">
          {logIn ? "Sign Up" : "Sign In"}
        </Link>
      </section>
    </Form>
  );
}
