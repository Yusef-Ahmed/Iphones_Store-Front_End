import { Cards } from "./Cards";
import { Search } from "./Search";
import { useLoaderData } from "react-router-dom";


export function Products() {
  const products = useLoaderData();
  products.map(product => {
    product.price = product.name.length + + product.id * 100;
  });

  return <>
    <Search products={products} />
    {/* <Cards /> */}
  </>
}