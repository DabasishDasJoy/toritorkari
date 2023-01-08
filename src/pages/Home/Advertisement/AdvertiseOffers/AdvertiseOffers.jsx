import React from "react";
import Coupon from "../../../../components/Coupon/Coupon";

const AdvertiseOffers = () => {
  return (
    <div className="border-2 tori-bg-gray rounded-md border-warning hover:border-primary lg:col-span-2 overflow-hidden">
      <div className="bg-neutral text-black text-center py-2 font-medium">
        Latest Super Discount Active Coupon Code
      </div>
      <div className="flex flex-col gap-2 justify-center px-2 py-4">
        <Coupon></Coupon>
        <Coupon></Coupon>
      </div>
    </div>
  );
};

export default AdvertiseOffers;
