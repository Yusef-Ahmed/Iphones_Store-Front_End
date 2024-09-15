import { Link } from "react-router-dom";

export function HomeHeader() {
  return (
    <>
      <div>
        <div className="isolate">
          <div className="mx-auto max-w-2xl pt-48">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your place to find the best price over all websites!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
                We compare prices across multiple trusted platforms to ensure
                you get the best value for your money. Shop confidently and save
                more on your next iPhone purchase.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="products"
                  className="transition delay-0 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Take a look
                </Link>
                <Link
                  to="products"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          ></div>
        </div>
      </div>
      <p id="bottom"/>
    </>
  );
}
