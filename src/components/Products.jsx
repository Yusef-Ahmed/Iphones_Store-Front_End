import { Cards } from "./Cards";
import { Form, useLoaderData } from "react-router-dom";
import { useState } from "react";
import PaginationControlled from "../components/Pagination";

export function Products() {
  const items = useLoaderData();
  // const [searchTerm, setSearchTerm] = useState(null);
  // const [value, setValue] = useState([null, null]);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <header className="mt-40">
        <div className="flex items-center justify-between w-11/12 ml-14">
          <Form className="flex gap-4 w-1/4 isolate">
            <input
              className="w-full rounded-lg"
              placeholder="Search"
              onChange={handleChange}
            ></input>
            <button className="bg-slate-600 rounded-md px-2 hover:bg-zinc-500 active:bg-gray-700">Filter</button>
          </Form>
        </div>
        <Cards products={items.data} />
      </header>
      <div className="flex justify-center mb-8">
        <PaginationControlled total={Math.ceil(items.rowCount / 8)} />
      </div>
    </>
  );
}
