import { useState } from "react";
import Heart from "react-animated-heart";
import { getAuthToken } from "../../util/auth";

export default function AnimatedHeart({ type, status, id }) {
  const [isClick, setClick] = useState(type == "WishList" || status);
  
  const handleButtonClick = async () => {
    try {
      const token = getAuthToken();
      const endPoint =
        "http://localhost:5000/user/" +
        (isClick ? "deleteFromWishList" : "addToWishList");
      const response = await fetch(endPoint, {
        method: isClick ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify({ productId: id }),
      });

      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData);
      }
      setClick(!isClick);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  
  return (
    <div className="absolute left-3/4 mt-4">
      <Heart isClick={isClick} onClick={handleButtonClick} />
    </div>
  );
}
