import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VantaHalo } from "../components/VantaHalo.jsx";
import Iphone from "../assets/homeImages/iphone.png";
import HeadPhone from "../assets/homeImages/HeadPhone.png";
import AirPods from "../assets/homeImages/AirPods.png";
import { Floating } from "../components/Floating.jsx";

export function HomeHeader() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Iphone, HeadPhone, AirPods];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>
        <VantaHalo />
        <div className="flex justify-between pt-20 mx-20">
          <div className="w-4/6">
            <h1
              id="shadow"
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Your place to find the best price over all websites!
            </h1>
            <p
              id="shadow"
              className="max-w-2xl mt-14 text-lg leading-8 text-slate-300"
            >
              We compare prices across multiple trusted platforms to ensure you
              get the best value for your money. Shop confidently and save more
              on your next purchase, whether it's a smartphone, laptop, or
              headphone.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <Link
                to="products"
                className="will-change-transform transition delay-0 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Take a look
              </Link>
              <Link
                id="shadow"
                to="products"
                className="text-sm font-semibold leading-6 text-slate-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <Floating>
            <div className="mr-20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  className="h-96"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            </div>
          </Floating>
        </div>
      </div>
      <p id="bottom" />
    </>
  );
}
