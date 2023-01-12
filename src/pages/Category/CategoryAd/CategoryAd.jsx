import React from "react";
import { Link } from "react-router-dom";

const CategoryAd = ({ ad: { title, image } }) => {
  return (
    <div
      className={`text-center rounded-md border hover:shadow-lg transition-all delay-75 overflow-hidden relative`}
    >
      <img src={image} alt="" className="w-full h-full" />
      <div className="absolute text-white font-semibold inset-0 flex flex-col gap-1 items-center justify-center">
        <p className="text-sm">Taste of</p>

        <h3 className="text-2xl">{title}</h3>
        <small className="text-xs leading-none"> Weekend Discount Offer</small>

        <Link className="tori-btn-primary mt-3">Shop Now</Link>
      </div>
    </div>
  );
};

export default CategoryAd;
