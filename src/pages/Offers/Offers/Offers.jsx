import React from "react";
import Coupon from "../../../components/Coupon/Coupon";
import PageBanner from "../../../components/PageBanner/PageBanner";

const Offers = () => {
  return (
    <div>
      <PageBanner></PageBanner>

      <div className="sub-section grid grid-cols-2 gap-x-10 gap-y-5 bg-[#F9FAFB]">
        <Coupon></Coupon>
        <Coupon></Coupon>
        <Coupon></Coupon>
        <Coupon></Coupon>
        <Coupon></Coupon>
      </div>
    </div>
  );
};

export default Offers;
