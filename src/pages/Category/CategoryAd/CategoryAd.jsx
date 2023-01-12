import React from "react";
import { Link } from "react-router-dom";

const CategoryAd = () => {
  return (
    <div className={`text-center rounded-md border overflow-hidden relative`}>
      <img
        src="https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=1920&q=75"
        alt=""
        className="w-full"
      />
      <div className="absolute text-white font-semibold inset-0 flex flex-col gap-1 items-center justify-center">
        <p className="text-sm">Taste of</p>

        <h3 className="text-2xl">Fresh & Natural</h3>
        <small className="text-xs leading-none"> Weekend Discount Offer</small>

        <Link className="tori-btn-primary mt-3">Shop Now</Link>
      </div>
    </div>
  );
};

export default CategoryAd;
