import React from "react";

const Coupon = () => {
  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 px-2 py-3 rounded-md bg-white shadow-md lg:gap-0 gap-2">
      <div className="lg:col-span-4 lg:border-r-2 border-dashed flex gap-3">
        <div className="flex items-center">
          <img
            src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75"
            alt=""
            className="w-16 h-16"
          />
        </div>
        <div className="text-black flex flex-col gap-1">
          <div className="flex justify-between">
            <p>
              <span className="text-warning font-bold text-lg">10%</span> Off
            </p>
            <span className="tori-btn-active">Active</span>
          </div>
          <p className="font-semibold text-lg  leading-8">
            October Gift Voucher
          </p>

          {/* countdown */}
          <div className="">
            <p className="text-black font-semibold flex gap-1">
              <span className="bg-primary text-white px-2  rounded-md">23</span>{" "}
              :<span className="bg-primary text-white px-2  rounded-md">8</span>{" "}
              :
              <span className="bg-primary text-white px-2  rounded-md">23</span>{" "}
              :
              <span className="bg-primary text-white px-2  rounded-md">23</span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 px-2 gap-2 flex flex-col items-center">
        <span className="coupon-tag">October21</span>
        <p className="text-xs font-medium text-black/80">
          Enjoy 10% discount on more than{" "}
          <span className="font-semibold">$500</span> Shoppings.
        </p>
      </div>
    </div>
  );
};

export default Coupon;
