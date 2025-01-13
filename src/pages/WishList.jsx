import { useLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/auth";
import { Cards } from "../components/Cards";

export function WishList () {
  const products = useLoaderData();
  return <>
    <h1 className="text-6xl text-center my-7">Favorites</h1>
    <Cards type={"WishList"} products={products} />
  </>
}

export async function fetchCardsLoader() {
  const response = await fetch(
    "http://localhost:5000/user/showWishList",
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

export function loader() {
  return fetchCardsLoader();
}