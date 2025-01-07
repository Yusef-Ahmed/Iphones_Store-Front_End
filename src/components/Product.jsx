import { StarIcon } from "@heroicons/react/20/solid";
import { Link, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/auth";
import { Reviews } from "./Reviews";
import { useRef } from "react";
import CircleChart from "./CircleChart";
import ApexChart from "./ApexChart";
import { Cards } from "./Cards";
import { Section } from "./Section";
import { motion } from "framer-motion";

export function Product() {
  const data = useLoaderData();
  const reviewRef = useRef(null);
  const size = data.reviews.length;
  const series = { positive: 0, negative: 0 };
  const rates = [0, 0, 0, 0, 0];
  data.reviews.forEach((review) => {
    rates[review.rating - 1]++;
    series[review.sentiment]++;
  });

  return (
    <div className="pt-16">
      {/*               Header name               */}
      <Section>
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex items-center px-24 mx-auto space-x-2">
            <li>
              <div className="flex items-center">
                <Link
                  to="/products"
                  className="z-0 mr-2 text-sm font-medium text-slate-200"
                >
                  Products
                </Link>
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="w-4 h-5"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <p
                aria-current="page"
                className="font-medium text-slate-400 hover:text-slate-500 cursor-default"
              >
                {data.ProductCategory}
              </p>
            </li>
          </ol>
        </nav>
      </Section>

      {/*               Product info               */}
      <div className="flex gap-x-16 px-2 py-10">
        {/*               Product image               */}
        <div className="w-1/3 flex justify-center items-start">
            <motion.img
            initial={{ opacity: 0, x: -200 }}
            animate={{opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1,
            }}
              alt={data.ProductTitle}
              src={data.ProductImage}
              className={
                "hover:scale-125 transition-all mx-3 sticky top-5 rounded-lg h-96 object-contain"
              }
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://i.pinimg.com/736x/fa/28/83/fa2883910c05537c886c8950c0c4d325.jpg";
              }}
            />
        </div>
        <div className="w-2/3">
          <Section delay={1}>
            {/*               Product title               */}
            <h1 className="font-bold tracking-tight text-slate-200 text-3xl">
              {data.ProductTitle}
            </h1>
            {/*               Under Title               */}
            <div className="flex gap-10">
              <p className="text-sm text-slate-400 mt-1">
                Brand: {data.ProductBrand}
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Marketplace: {data.Marketplace}
              </p>
            </div>
          </Section>
          <div className="flex mt-10">
            {/*               ProductSpecifications               */}
            <div className="w-3/5 border-r-2 border-slate-500">
              <Section delay={2}>
                <h1 className="mb-4 font-semibold">Specifications</h1>
                <ul className="space-y-3 text-left text-slate-300 px-4">
                  {data.ProductSpecifications.map((specification, index) => {
                    let text = specification.split(":");
                    return (
                      <section key={index} className="flex space-x-3">
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-blue-400 mt-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 12"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                          />
                        </svg>
                        <li className="cursor-default text-slate-400 hover:text-slate-200 flex items-center space-x-3 rtl:space-x-reverse gap-1">
                          <p>
                            {text.length == 2 ? <b>{text[0] + ": "}</b> : text}
                            {text.length == 2 ? text[1] : ""}
                          </p>
                        </li>
                      </section>
                    );
                  })}
                </ul>
              </Section>
            </div>
            {/*               Details               */}
            <div className="w-2/5 ml-2">
              <Section delay={2}>
                <h1 className="ml-2 font-semibold">Details</h1>
                <div className="flex flex-col items-center justify-between my-10 h-fit gap-20 sticky top-1/4">
                  {/*               Product price               */}
                  <div className="flex items-center">
                    <div className="text-3xl tracking-tight text-slate-300 hover:text-slate-200 cursor-default">
                      <span className="text-sm float-left">EGP</span>
                      {data.ProductPrice}
                      {data.ProductOldPrice && (
                        <span className="text-red-500 ml-5 text-3xl">
                          -
                          {Math.round(
                            100 -
                              (data.ProductPrice / data.ProductOldPrice) * 100
                          )}
                          %
                        </span>
                      )}
                      {data.ProductOldPrice && (
                        <p className="text-sm text-slate-400 ml-6">
                          Instead of <del>{data.ProductOldPrice}</del>
                          <span className="text-sm"> EGP</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/*               Out of 5               */}
                  <div className="flex items-center">
                    <div className="flex flex-col text-center">
                      <p>{data.ProductRatings} out of 5</p>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            aria-hidden="true"
                            className={
                              Math.floor(data.ProductRatings) > rating
                                ? "text-slate-200 h-6 w-6 flex-shrink-0"
                                : "text-gray-600 h-6 w-6 flex-shrink-0"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/*               Reviews               */}
                  <button
                    onClick={() =>
                      reviewRef.current.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                    className="text-2xl font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    {data.reviews.length} Reviews
                  </button>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        {/*               Description               */}
        <Section>
          <div className="mx-8 border-y-2 border-slate-500 py-6">
            <h1 className="font-semibold mb-2">Description</h1>
            <p className="text-slate-300 hover:text-slate-200">
              {data.ProductDescription}
            </p>
          </div>
        </Section>
        {/*               Product Link               */}
        <Section>
          <div className="mx-8 border-b-2 border-slate-500 py-6">
            <h1 className="font-semibold mb-2">Product link</h1>
            <a
              href={data.ProductLink}
              target="_blank"
              className="underline text-blue-400"
            >
              {data.ProductLink}
            </a>
          </div>
        </Section>
        {/*               Seller Name               */}
        <Section>
          <div className="mx-8 border-b-2 border-slate-500 py-6">
            <h1 className="font-semibold mb-2">
              Seller name : {data.SellerName}
            </h1>
            <a
              href={data.SellerUrl}
              target="_blank"
              className="underline text-blue-400"
            >
              {data.SellerUrl}
            </a>
          </div>
        </Section>
      </div>
      {/*               Charts               */}
      <Section>
        <div className="flex mx-8 justify-evenly border-b-2 border-slate-500 py-4 items-center">
          <ApexChart
            positive={series["positive"]}
            negative={series["negative"]}
          />
          <CircleChart total={size} rates={rates} />
        </div>
      </Section>
      {/*               Matched Products               */}
      {data.matchedProducts.length > 0 && (
        <div className="mx-8 border-b-2 border-slate-500 py-6">
          <h1 className="font-semibold">Matched Products</h1>
          <Section>
          <Cards products={data.matchedProducts} />
      </Section>
        </div>
      )}

      {/*               Reviews               */}
      <p ref={reviewRef}></p>
      <Section>
      <Reviews
        size={size}
        reviews={data.reviews}
        ProductRatings={data.ProductRatings}
        rates={rates}
      /></Section>
      <button
        onClick={() =>
          window.scroll({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-2 rounded-lg"
      >
        Jump to top
      </button>
    </div>
  );
}

async function fetchProduct(id) {
  const response = await fetch(
    "http://localhost:5000/product/getById?id=" + id,
    {
      headers: {
        Authorization: getAuthToken(),
      },
    }
  );

  const resData = await response.json();

  if (!response.ok) console.log(resData);

  return resData;
}

export function loader({ params }) {
  return fetchProduct(params.id);
}
