import React from "react";

const CustomerReviews = () => {
  return (
    <div className="flex flex-col text-gray-700">
      <div className="flex flex-col w-full">
        <h2 className="text-base mb-2 font-semibold">Customer reviews</h2>
        <div className="flex flex-wrap items-center mb-1 space-x-2">
          <div className="flex">
            <button
              type="button"
              title="Rate 1 stars"
              aria-label="Rate 1 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-accent"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Rate 2 stars"
              aria-label="Rate 2 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-accent"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Rate 3 stars"
              aria-label="Rate 3 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-accent"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Rate 4 stars"
              aria-label="Rate 4 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-gray-300"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Rate 5 stars"
              aria-label="Rate 5 stars"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-gray-300"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
          </div>
          <span className="text-gray-400">3 out of 5</span>
        </div>
        <p className="text-gray-400">861 global ratings</p>
        <div className="flex flex-col mt-2">
          <div className="flex items-center space-x-1">
            <span className="flex-shrink-0 w-12">5 star</span>
            <div className="flex-1 h-3 overflow-hidden rounded-sm bg-gray-200">
              <div className="bg-orange-300 h-3 w-5/6"></div>
            </div>
            <span className="flex-shrink-0 w-12 text-right">83%</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="flex-shrink-0 w-12">4 star</span>
            <div className="flex-1 h-3 overflow-hidden rounded-sm bg-gray-200">
              <div className="bg-orange-300 h-3 w-4/6"></div>
            </div>
            <span className="flex-shrink-0 w-12 text-right">67%</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="flex-shrink-0 w-12">3 star</span>
            <div className="flex-1 h-3 overflow-hidden rounded-sm bg-gray-200">
              <div className="bg-orange-300 h-3 w-3/6"></div>
            </div>
            <span className="flex-shrink-0 w-12 text-right">50%</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="flex-shrink-0 w-12">2 star</span>
            <div className="flex-1 h-3 overflow-hidden rounded-sm bg-gray-200">
              <div className="bg-orange-300 h-3 w-2/6"></div>
            </div>
            <span className="flex-shrink-0 w-12 text-right">33%</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="flex-shrink-0 w-12">1 star</span>
            <div className="flex-1 h-3 overflow-hidden rounded-sm bg-gray-200">
              <div className="bg-orange-300 h-3 w-1/6"></div>
            </div>
            <span className="flex-shrink-0 w-12 text-right">17%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
