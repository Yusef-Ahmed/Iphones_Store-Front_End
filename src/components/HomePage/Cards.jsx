import { Link, useLoaderData } from "react-router-dom";

export function Cards() {
  const products = useLoaderData();

  return (
    <div className="bg-white">
      <div className="mx-8 px-4 py-12">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={"/product/" + product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt="none"
                  src="https://i.pinimg.com/564x/24/ab/a7/24aba79b4963af6c0d1bfeb3ffa8d76a.jpg"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {Math.random().toFixed(3) * 1000} $
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function fetchCardsLoader() {
  const response = await fetch("https://api.restful-api.dev/objects");
  const resData = await response.json();

  if (!response.ok) console.log("not ok");
  
  return resData;
}

export function loader() {
  return fetchCardsLoader();
}