import { Form, Link, useActionData, useSearchParams } from "react-router-dom";
import logo from "../assets/NewLogo.png";

export function AuthForm() {
  let authData = useActionData();
  if (authData && typeof authData !== 'object') {
    authData = {message: authData};
  }
  const [searchParams] = useSearchParams();
  const signUp = searchParams.get("mode") === "signUp";

  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 mt-16 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/" className="relative">
            <img
              alt="Iphones"
              src={logo}
              className="w-auto h-32 mx-auto transition duration-300 delay-150 hover:-translate-y-1 hover:scale-110"
            />
          </Link>
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center">
            {!signUp ? "Sign in to your account" : "Sign up now for free!"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {authData && (
            <ul>
              {Object.values(authData).map((err) => (
                <div
                  key={err}
                  className="relative px-4 py-3 mb-2 text-center text-red-700 bg-red-100 border border-red-400 rounded"
                  role="alert"
                >
                  <span class="block sm:inline">
                    {err}
                  </span>
                </div>
              ))}
            </ul>
          )}
          <Form method="POST" className="space-y-6">
            {signUp && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-0">
                {!signUp ? "Sign in" : "Sign up"}
              </button>
            </div>
          </Form>

          <p className="items-center justify-center mt-6 text-sm text-gray-500">
            {!signUp ? "Don't " : "Already "} have an email?
            <Link
              to={"/auth?mode=" + (!signUp ? "signUp" : "logIn")}
              className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {!signUp ? "Sign up now" : "Log in"}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
