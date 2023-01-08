import React from "react";
import meat from "../../../../assets/pngegg.png";

const AdvertiseProduct = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 w-full lg:h-[346px] bg-secondary rounded-md">
      <div className="lg:col-span-3 flex flex-col justify-center gap-5 px-5">
        <h1 className="lg:text-3xl text-xl font-bold leading-10 text-black">
          Best Different Type of Grocery Store
        </h1>
        <p className="text-sm tori-text-neutral">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          quisquam?
        </p>
        <div>
          <button className="tori-btn-secondary">Shop Now</button>
        </div>
      </div>
      <div className="lg:col-span-2 flex items-center">
        <img src={meat} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default AdvertiseProduct;
