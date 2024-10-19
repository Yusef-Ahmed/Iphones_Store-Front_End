import { Form, Link, redirect, useSubmit } from "react-router-dom";
import { getAuthRole, getAuthToken } from "../../util/auth";


export function Cards({ products }) {
  // const products = useLoaderData();
  const role = getAuthRole() === "admin";
  const submit = useSubmit();

  function handleDelete(id) {
    submit(null, { method: "delete", action: "?id=" + id});
  }

  return (
    <div className="px-4 py-12 mx-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <Link
              to={product.id.toString()}
              className="transition duration-300 will-change-transform group delay-0 hover:-translate-y-1 hover:scale-110"
            >
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt="none"
                  src="https://i.pinimg.com/564x/24/ab/a7/24aba79b4963af6c0d1bfeb3ffa8d76a.jpg"
                  className="object-cover object-center w-full h-full bg-opacity-0 group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price} $
              </p>
            </Link>
            {role && (
              <>
                <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      {!products.length && (
        <h1 className="flex justify-center text-4xl">No results found</h1>
      )}
    </div>
  );
}

export async function fetchCardsLoader() {
  const response = await fetch("http://localhost:5000/product/");
  const resData = await response.json();

  if (!response.ok) console.log("not ok");

  return resData;
}

export function loader() {
  return fetchCardsLoader();
}

export async function deleteAction({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const id = searchParams.get("id");
  const token = getAuthToken();

  const response = await fetch("http://localhost:5000/product/", {
    method: "delete",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      authorization: token,
    },
    body: new URLSearchParams({ id }),
  });

  const resData = await response.json();

  if (!response.ok) {
    return resData;
  }
  
  return redirect("/products");
}
