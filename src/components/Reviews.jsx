import { StarIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";

export function Reviews({ reviews, ProductRatings }) {
  const reviewRef = useRef(null);

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-10 max-w-screen-xl px-4 2xl:px-0">
        {/* Header */}
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold text-gray-900">Reviews</h2>

          <div className="mt-2 flex items-center gap-2 sm:mt-0">
            <div className="flex items-center">
                  {/*               Out of 5               */}
                  <div className="flex flex-col text-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={
                            Math.floor(ProductRatings) > rating
                              ? "text-gray-900 h-6 w-6 flex-shrink-0"
                              : "text-gray-200 h-6 w-6 flex-shrink-0"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
            <p className="text-sm font-medium leading-none text-gray-500">
              ({ProductRatings})
            </p>
            <button
              onClick={() => reviewRef.current.scrollIntoView({
                behavior: "smooth",
              })}
              className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"
            >
              {" "}
              {reviews.length} Reviews{" "}
            </button>
          </div>
        </div>
        {/* Each rate */}
        <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
          <div className="shrink-0 space-y-4">
            <p className="text-2xl font-semibold leading-none text-gray-900">
              4.65 out of 5
            </p>
            <button
              type="button"
              data-modal-target="review-modal"
              data-modal-toggle="review-modal"
              className="mb-2 me-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
            >
              Write a review
            </button>
          </div>

          <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900">
                5
              </p>
              <svg
                className="h-4 w-4 shrink-0 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <div className="h-1.5 w-80 rounded-full bg-gray-200">
                <div className="h-1.5 rounded-full bg-yellow-300 w-1/5"></div>
              </div>
              <a
                href="#"
                className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline text-primary-500 sm:w-auto sm:text-left"
              >
                239 <span className="hidden sm:inline">reviews</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900">
                4
              </p>
              <svg
                className="h-4 w-4 shrink-0 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <div className="h-1.5 w-80 rounded-full bg-gray-200">
                <div className="h-1.5 rounded-full bg-yellow-300 w-3/5"></div>
              </div>
              <a
                href="#"
                className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline text-primary-500 sm:w-auto sm:text-left"
              >
                432 <span className="hidden sm:inline">reviews</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900">
                3
              </p>
              <svg
                className="h-4 w-4 shrink-0 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <div className="h-1.5 w-80 rounded-full bg-gray-200 ">
                <div className="h-1.5 rounded-full bg-yellow-300 w-1/6"></div>
              </div>
              <a
                href="#"
                className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline text-primary-500 sm:w-auto sm:text-left"
              >
                53 <span className="hidden sm:inline">reviews</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900">
                2
              </p>
              <svg
                className="h-4 w-4 shrink-0 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <div className="h-1.5 w-80 rounded-full bg-gray-200">
                <div className="h-1.5 rounded-full bg-yellow-300 w-7"></div>
              </div>
              <a
                href="#"
                className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline text-primary-500 sm:w-auto sm:text-left"
              >
                32 <span className="hidden sm:inline">reviews</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900">
                1
              </p>
              <svg
                className="h-4 w-4 shrink-0 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <div className="h-1.5 w-80 rounded-full bg-gray-200">
                <div className="h-1.5 rounded-full bg-yellow-300 w-0"></div>
              </div>
              <a
                href="#"
                className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline text-primary-500 sm:w-auto sm:text-left"
              >
                13 <span className="hidden sm:inline">reviews</span>
              </a>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div ref={reviewRef} className="mt-6 divide-y divide-gray-200">
          <div className="gap-3 pb-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="flex items-center gap-0.5">
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <p className="text-base font-semibold text-white">
                  Micheal Gough
                </p>
                <p className="text-sm font-normal text-gray-500">
                  November 18 2023 at 15:35
                </p>
              </div>

              <div className="inline-flex items-center gap-1">
                <svg
                  className="h-5 w-5 text-primary-700 text-primary-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-900 text-white">
                  Verified purchase
                </p>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <p className="text-base font-normal text-gray-500">
                My old IMAC was from 2013. This replacement was well needed.
                Very fast, and the colour matches my office set up perfectly.
                The display is out of this world and I’m very happy with this
                purchase.
              </p>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-1"
                    type="radio"
                    value=""
                    name="reviews-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                  />
                  <label
                    for="reviews-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 text-gray-300"
                  >
                    {" "}
                    Yes: 3{" "}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-2"
                    type="radio"
                    value=""
                    name="reviews-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                  />
                  <label
                    for="reviews-radio-2"
                    className="ms-2 text-sm font-medium text-gray-900 text-gray-300"
                  >
                    No: 0{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-3 py-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="flex items-center gap-0.5">
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <p className="text-base font-semibold text-gray-900 text-white">
                  Jese Leos
                </p>
                <p className="text-sm font-normal text-gray-500 text-gray-400">
                  November 18 2023 at 15:35
                </p>
              </div>

              <div className="inline-flex items-center gap-1">
                <svg
                  className="h-5 w-5 text-primary-700 text-primary-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-900 text-white">
                  Verified purchase
                </p>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <p className="text-base font-normal text-gray-500 text-gray-400">
                It’s fancy, amazing keyboard, matching accessories. Super fast,
                batteries last more than usual, everything runs perfect in this
                computer. Highly recommend!
              </p>

              <div className="flex gap-2">
                <img
                  className="h-32 w-20 rounded-lg object-cover"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-1.jpg"
                  alt=""
                />
                <img
                  className="h-32 w-20 rounded-lg object-cover"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg"
                  alt=""
                />
              </div>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-3"
                    type="radio"
                    value=""
                    name="reviews-radio-2"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                  />
                  <label
                    for="reviews-radio-3"
                    className="ms-2 text-sm font-medium text-gray-900 text-gray-300"
                  >
                    {" "}
                    Yes: 1{" "}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-4"
                    type="radio"
                    value=""
                    name="reviews-radio-2"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                  />
                  <label
                    for="reviews-radio-4"
                    className="ms-2 text-sm font-medium text-gray-900 text-gray-300"
                  >
                    No: 0{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-3 py-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="flex items-center gap-0.5">
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <p className="text-base font-semibold text-gray-900 text-white">
                  Bonnie Green
                </p>
                <p className="text-sm font-normal text-gray-500 text-gray-400">
                  November 18 2023 at 15:35
                </p>
              </div>

              <div className="inline-flex items-center gap-1">
                <svg
                  className="h-5 w-5 text-primary-700 text-primary-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-900 text-white">
                  Verified purchase
                </p>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <p className="text-base font-normal text-gray-500 text-gray-400">
                My old IMAC was from 2013. This replacement was well needed.
                Very fast, and the colour matches my office set up perfectly.
                The display is out of this world and I’m very happy with this
                purchase.
              </p>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-5"
                    type="radio"
                    value=""
                    name="reviews-radio-3"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                  />
                  <label
                    for="reviews-radio-5"
                    className="ms-2 text-sm font-medium text-gray-900 text-gray-300"
                  >
                    {" "}
                    Yes: 0{" "}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-6"
                    type="radio"
                    value=""
                    name="reviews-radio-3"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                  />
                  <label
                    for="reviews-radio-6"
                    className="ms-2 text-sm font-medium text-gray-900 text-gray-300"
                  >
                    No: 0{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-3 py-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="flex items-center gap-0.5">
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <p className="text-base font-semibold text-gray-900 text-white">
                  Roberta Casas
                </p>
                <p className="text-sm font-normal text-gray-500 text-gray-400">
                  November 18 2023 at 15:35
                </p>
              </div>

              <div className="inline-flex items-center gap-1">
                <svg
                  className="h-5 w-5 text-primary-700 text-primary-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-900 text-white">
                  Verified purchase
                </p>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <p className="text-base font-normal text-gray-500 text-gray-400">
                I have used earlier Mac computers in my university work for a
                number of years and found them easy to use.The iMac 2021 is no
                exception. It works straight out of the box giving superb
                definition from the HD screen.
              </p>
              <p className="text-base font-normal text-gray-500 text-gray-400">
                Basic tools such as a browser (Safari) and a mail client are
                included in the system. Microsoft Office apps can be downloaded
                from the App Store though they may only work in read-only mode
                unless you take out a subscription. The instruction manual that
                comes with it is the size of a piece of toilet paper but the
                proper user guide is on-line.
              </p>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-7"
                    type="radio"
                    value=""
                    name="reviews-radio-4"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                  />
                  <label
                    for="reviews-radio-7"
                    className="ms-2 text-sm font-medium text-gray-900 text-gray-300"
                  >
                    {" "}
                    Yes: 1{" "}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-8"
                    type="radio"
                    value=""
                    name="reviews-radio-4"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                  />
                  <label
                    for="reviews-radio-8"
                    className="ms-2 text-sm font-medium text-gray-900 text-gray-300"
                  >
                    No: 0{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-3 py-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="flex items-center gap-0.5">
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <p className="text-base font-semibold text-gray-900 text-white">
                  Neil Sims
                </p>
                <p className="text-sm font-normal text-gray-500 text-gray-400">
                  November 18 2023 at 15:35
                </p>
              </div>

              <div className="inline-flex items-center gap-1">
                <svg
                  className="h-5 w-5 text-primary-700 text-primary-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-900 text-white">
                  Verified purchase
                </p>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <p className="text-base font-normal text-gray-500 text-gray-400">
                I replaced my 11 year old iMac with the new M1 Apple. I wanted
                to remain with Apple as my old one is still working perfectly
                and all Apple products are so reliable. Setting up was simple
                and fast and transferring everything from my previous iMac
                worked perfectly.
              </p>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-9"
                    type="radio"
                    value=""
                    name="reviews-radio-5"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                  />
                  <label
                    for="reviews-radio-9"
                    className="ms-2 text-sm font-medium text-gray-900 text-gray-300"
                  >
                    {" "}
                    Yes: 1{" "}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-10"
                    type="radio"
                    value=""
                    name="reviews-radio-5"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                  />
                  <label
                    for="reviews-radio-10"
                    className="ms-2 text-sm font-medium text-gray-900 text-gray-300"
                  >
                    No: 0{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* View more */}
        <div className="mt-6 text-center">
          <button
            type="button"
            className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 hover:text-white "
          >
            View more reviews
          </button>
        </div>
      </div>
    </section>
  );
}
