import { Cards } from "../components/Cards";
import { useLoaderData, useSearchParams } from "react-router-dom";
import PaginationControlled from "../components/Pagination";
import MegaMenu from "../components/MegaMenu";
import { motion } from "framer-motion";
import { useState } from "react";
import { getAuthToken } from "../../util/auth";

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useLoaderData();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSearchParams = new URLSearchParams(searchParams);
    Array.from(event.target.elements).forEach((element) => {
      if (element.name) {
        if (!element.value) newSearchParams.delete(element.name);
        else newSearchParams.set(element.name, element.value);
      }
    });
    setSearchParams(newSearchParams);
  };

  return (
    <>
      <header className="mt-20">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-9 px-4 mb-5 text-slate-50 text-lg"
        >
          Filters
          <motion.span
            animate={{ rotate: isMenuOpen ? 180 : 90 }}
            style={{ display: "inline-block" }}
            className="ml-2"
          >
            &#9650;
          </motion.span>
        </button>
        <MegaMenu isOpen={isMenuOpen}>
          <form
            onSubmit={handleSubmit}
            className=" border-b-2 border-gray-400 pb-10 mx-2 flex gap-16 isolate justify-around"
          >
            {/* Search */}
            <div>
              <p className="mb-5">Search</p>
              <input
                className="w-full rounded-lg text-gray-900"
                placeholder="Search"
                name="name"
                autoComplete="off"
              ></input>
            </div>
            {/* Price */}
            <div className="w-1/5">
              <p className="mb-5">Price</p>
              <div className="flex gap-5">
                <input
                  className="w-full rounded-lg text-gray-900 text-center"
                  placeholder="Minimum"
                  name="minPrice"
                  type="number"
                ></input>
                <input
                  className="w-full rounded-lg text-gray-900 text-center"
                  placeholder="Maximum"
                  name="maxPrice"
                  type="number"
                ></input>
              </div>
            </div>
            {/* Rating */}
            <div className="w-1/4">
              <p className="mb-5">Rating</p>
              <div className="flex gap-5">
                <div className="w-full">
                  <select
                    name="minRating"
                    className="text-center block appearance-none w-full border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option value="">Min Rating</option>
                    <option value={1}>1 star</option>
                    <option value={2}>2 stars</option>
                    <option value={3}>3 stars</option>
                    <option value={4}>4 stars</option>
                    <option value={5}>5 stars</option>
                  </select>
                </div>
                <div className="w-full">
                  <select
                    name="maxRating"
                    className="text-center block appearance-none w-full border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option value="">Max Rating</option>
                    <option value={1}>1 star</option>
                    <option value={2}>2 stars</option>
                    <option value={3}>3 stars</option>
                    <option value={4}>4 stars</option>
                    <option value={5}>5 stars</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Market place */}
            <div>
              <p className="mb-5">Market Place</p>
              <div className="w-full">
                <select
                  name="marketplace"
                  className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option value="">All</option>
                  <option value="amazon">Amazon</option>
                  <option value="noon">Noon</option>
                  <option value="jumia">Jumia</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">

            <button className="will-change-transform transition delay-0 h-1/2 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md bg-indigo-600 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              submit
            </button>
            </div>
          </form>
        </MegaMenu>
        <Cards products={items.data} />
      </header>
      <div className="flex justify-center mb-8">
        <PaginationControlled total={Math.ceil(items.rowCount / 8)} />
      </div>
    </>
  );
}

export async function fetchCardsLoader(params) {
  const response = await fetch(
    "http://localhost:5000/product?numOfElements=8&" + params,
    {
      headers: {
        Authorization: getAuthToken(),
      },
    }
  );
  const resData = await response.json();

  if (!response.ok) console.log("fetchCardsLoader not ok");

  return resData;
}

export function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  let params = "";
  searchParams.forEach((value, key) => (params += key + "=" + value + "&"));
  params = params.substring(0, params.length - 1);
  return fetchCardsLoader(params);
}
