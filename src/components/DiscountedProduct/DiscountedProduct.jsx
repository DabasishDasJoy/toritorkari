import React from "react";
import { BsBagPlusFill } from "react-icons/bs";

const DiscountedProduct = () => {
  return (
    <div className="text-black/90 grid grid-rows-7 gap-1 bg-white rounded-sm p-2 product relative">
      <div className="bg-accent rounded-sm text-xs font-semibold py-1 z-10 absolute text-white px-2">
        <span>10% Off</span>
      </div>
      <div className="row-span-4 flex justify-center items-center p-2">
        <img
          src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FbvrsZtMt%2FCalabaza-Squash-Package-each.jpg&w=256&q=75"
          alt=""
          className="w-24 h-24 image"
        />
      </div>
      <div className="row-span-1 text-sm font-medium px-1">
        <span className="text-xs text-black/60">4pt</span>
        <p>Calabaza Squash</p>
      </div>
      <div className="row-span-2 flex justify-between px-1 items-center">
        <span className="font-extrabold text-xl">
          $15 <span className=" text-lg line-through text-black/50">$10</span>
        </span>
        <div className="border border-primary flex justify-center items-center p-2 transition-all delay-[30ms] hover:bg-primary hover:text-white rounded-sm text-primary">
          <BsBagPlusFill className="icon" />
        </div>
      </div>
    </div>
  );
};

export default DiscountedProduct;
