import { Link } from "react-router-dom";

export function Cards({ products }) {
  // const products = useLoaderData();

  return (
    <div className="px-4 py-12 mx-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Link key={product.id} to={product.id.toString()} className="transition duration-300 will-change-transform group delay-0 hover:-translate-y-1 hover:scale-110">
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
