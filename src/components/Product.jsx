import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { Form, Link, useLoaderData, useParams } from "react-router-dom";

const product = {
  sizes: [
    { name: "64", inStock: false },
    { name: "128", inStock: true },
    { name: "256", inStock: true },
    { name: "512", inStock: true },
  ],
  description:
    "The iPhone is a sleek, high-performance smartphone designed and manufactured by Apple Inc. Known for its cutting-edge technology and elegant design, the iPhone combines advanced hardware with intuitive software to deliver a seamless user experience.",
  highlights: [
    "Advanced Camera System",
    "High-Performance Chip",
    "Elegant Design",
    "Seamless Integration",
  ],
  details:
    "Powered by the latest A-series chip, such as the A17 Bionic, the iPhone delivers impressive performance. It ensures fast processing, smooth multitasking, and efficient power usage, making it a reliable choice for demanding tasks.",
};


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Product() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  
  const data = useLoaderData();
  const reviews = { average: data.rating, totalCount: 117 };

  return (
    <div className="pt-24 bg-white">
      <div className="pt-6">
        {/* Header */}
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <Link
                  to="/products"
                  className="z-0 mr-2 text-sm font-medium text-gray-900"
                >
                  Products
                </Link>
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <p
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {data.name}
              </p>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="hidden overflow-hidden rounded-lg aspect-h-4 aspect-w-3 lg:block">
            <img
              alt="iphone"
              src="https://i.pinimg.com/736x/f9/a3/e5/f9a3e58688ca11f19bc629e5a3da759c.jpg"
              className="object-fill w-full h-full"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
              <img
                alt="iphone"
                src="https://i.pinimg.com/564x/98/99/4c/98994c708294210963cd94e0a264f27f.jpg"
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
              <img
                alt="iphone"
                src="https://i.pinimg.com/564x/67/5b/61/675b61683c5b8f6c77741eb61367e1ca.jpg"
                className="object-cover object-bottom w-full h-full"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt="iphone"
              src="https://i.pinimg.com/736x/04/61/c4/0461c42819a67e04ca639e3346495210.jpg"
              className="object-cover object-top w-full h-full"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {data.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h1 className="mb-1">Price</h1>
            <p className="text-3xl tracking-tight text-gray-900">
              {data.price}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h1 className="mb-1">Reviews</h1>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={
                        reviews.average > rating
                          ? "text-gray-900 h-5 w-5 flex-shrink-0"
                          : "text-gray-200 h-5 w-5 flex-shrink-0"
                      }
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Memory</h3>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={classNames(
                          size.inStock
                            ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                            : "cursor-not-allowed bg-gray-50 text-gray-200",
                          "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                        )}
                      >
                        <span>{size.name}</span>
                        {size.inStock ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                            >
                              <line
                                x1={0}
                                x2={100}
                                y1={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="underline">Description</h3>

              <div className="my-4">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="underline">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="underline">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function fetchProduct(id) {
  const response = await fetch("http://localhost:5000/product?id=" + id);
  if (!response.ok) console.log("not ok");

  const resData = await response.json();

  return resData[0];
}

export function loader({ params }) {
  return fetchProduct(params.id);
}
