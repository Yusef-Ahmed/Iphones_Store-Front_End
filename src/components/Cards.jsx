import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";

export function Cards({ products }) {
  return (
    <div className="px-4 py-12 mx-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">
        {products.map((product) => (
          <div key={product.ProductID} className="flex flex-col">
            <Link
              to={"/products/" + product.ProductID}
              className="transition duration-300 will-change-transform group delay-0 hover:-translate-y-1 hover:scale-110"
            >
              {/*               Product image               */}
              <div className="w-full h-2 overflow-hidden rounded-lg aspect-h-1 aspect-w-1">
                <img
                  alt="product image"
                  src={product.ProductImage}
                  className="object-center w-full h-full bg-opacity-0 group-hover:opacity-75"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://i.pinimg.com/736x/fa/28/83/fa2883910c05537c886c8950c0c4d325.jpg";
                  }}
                />
              </div>

              <section className="flex flex-col justify-between mt-5 px-2">
                {/*               Title               */}
                <h3 className="text-sm overflow-hidden">
                  {product.ProductTitle}
                </h3>
                {/* market & sellerAnalysis */}
                <div className="flex justify-between">
                  <p className="text-sm text-slate-400">
                    Market : {product.MarketPlace}
                  </p>
                  {product.sellerAnalysis && (
                    <div>
                      <p className="text-sm text-slate-400">
                        Positive : {product.sellerAnalysis.Positive.toFixed(1)}%
                      </p>
                      <p className="text-sm text-slate-400">
                        Negative : {product.sellerAnalysis.Negative.toFixed(1)}%
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between mt-5">
                  {/*               Price               */}
                  <p className="text-lg font-medium">
                    {product.ProductPrice} $
                  </p>

                  {/*               Rating               */}
                  <div className="flex flex-col items-end">
                    <div className="flex flex-row">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={
                            Math.floor(product.ProductRatings) > rating
                              ? "text-slate-200 h-5 w-5 flex-shrink-0"
                              : "text-gray-600 h-5 w-5 flex-shrink-0"
                          }
                        />
                      ))}
                    </div>
                    <p className="m-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {product.ProductRatings} out of 5
                    </p>
                  </div>
                </div>
              </section>
            </Link>
          </div>
        ))}
      </div>

      {/*               No products returned               */}
      {!products.length && (
        <h1 className="flex justify-center text-4xl">No results found</h1>
      )}
    </div>
  );
}

