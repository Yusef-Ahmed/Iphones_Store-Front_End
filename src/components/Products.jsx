import { Cards } from "./Cards";
import { Search } from "./Search";
import { useLoaderData } from "react-router-dom";


export function Products() {
  const products = useLoaderData();
  return <>
    <Search products={products} />
    {/* <Cards /> */}
  </>
}