import React from "react";

const AdvertiseDiscount = () => {
  return (
    <div className="bg-[#FFEDD5] col-span-full gap-3 flex lg:flex-row flex-col lg:px-10 lg:py-6 p-5 justify-between lg:items-center items-start rounded-md">
      <div>
        <h1 className="lg:text-xl text-lg text-gray-800">
          <span className="text-primary font-semibold">
            100% Natural Quality{" "}
          </span>{" "}
          Organic Product
        </h1>
        <p className="text-black/80 lg:text-sm text-xs">
          See Our latest discounted products from here and get a special{" "}
          <a href="#discount" className="text-primary hover:text-primary/50">
            discount product.
          </a>
        </p>
      </div>

      <button className="tori-btn-primary">Shop Now</button>
    </div>
  );
};

export default AdvertiseDiscount;
