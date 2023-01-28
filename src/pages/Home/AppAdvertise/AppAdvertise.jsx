import React from "react";

const AppAdvertise = () => {
  return (
    <div className="bg-[#F9FAFB] sub-section">
      <div className="w-full rounded-md bg-primary lg:p-10 p-3 text-black">
        <div className="bg-white grid lg:grid-cols-6 rounded-md ">
          <div className="lg:col-span-4 p-7 lg:order-1 order-2 flex flex-col gap-2">
            <span className="lg:text-xl">Organic Products and Food</span>
            <h1 className="font-bold  lg:text-2xl text-xl">
              Quick Delivery to <span className="text-primary">Your Home</span>
            </h1>
            <p className="lg:text-sm text-xs">
              There are many products you will find our shop, Choose your daily
              necessary product from our KachaBazar shop and get some special
              offer. See Our latest discounted products from here and get a
              special discount.
            </p>
            <div>
              <a
                rel="noreferrer"
                target={"_blank"}
                href={"https://play.google.com/"}
                className="tori-btn-primary mt-5"
              >
                Download App
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 lg:order-2 order-1 flex justify-center items-center p-3">
            <img
              src="https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fdelivery-boy.png&w=384&q=75"
              alt=""
              className="lg:w-full w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAdvertise;
