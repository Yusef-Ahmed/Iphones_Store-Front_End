import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/auth";

export function EditProduct() {
  const errors = useActionData();
  const product = useLoaderData();

  return (
    <>
      <div className="relative flex flex-col justify-center flex-1 min-h-full px-6 py-12 mt-16 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-3xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Edit product
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {errors && (
            <ul>
              {Object.values(errors).map((err) => (
                <div
                  key={err}
                  className="relative px-4 py-3 mb-2 text-center text-red-700 bg-red-100 border border-red-400 rounded"
                  role="alert"
                >
                  <span class="block sm:inline">{err}</span>
                </div>
              ))}
            </ul>
          )}

          <Form method="PUT" className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="off"
                  defaultValue={product.name}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Rating
              </label>
              <div className="mt-2">
                <input
                  id="rating"
                  name="rating"
                  type="number"
                  required
                  autoComplete="off"
                  defaultValue={product.rating}
                  step="0.1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  id="price"
                  name="price"
                  type="number"
                  required
                  autoComplete="off"
                  defaultValue={product.price}
                  step="0.01"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-0">
                Edit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export async function editProductAction({ request, params }) {
  const token = getAuthToken();
  const data = await request.formData();
  const product = {
    id: +params.id,
    name: data.get("name"),
    rating: +data.get("rating"),
    price: +data.get("price"),
  };

  const response = await fetch("http://localhost:5000/product/", {
    method: "PUT",
    headers: { "Content-type": "application/json", authorization: token },
    body: JSON.stringify(product),
  });

  if (response.status === 401) {
    return logoutAction();
  }

  const resData = await response.json();

  if (!response.ok) {
    return resData;
  }

  return redirect("/products");
}
