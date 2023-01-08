import React from "react";
import { BsBagPlusFill } from "react-icons/bs";
import "./Product.css";

const Product = () => {
  return (
    <div className="text-black/90 grid grid-rows-7 bg-white rounded-sm p-2 product">
      <div className="row-span-4 flex justify-center items-center p-2">
        <img
          src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FbvrsZtMt%2FCalabaza-Squash-Package-each.jpg&w=256&q=75"
          alt=""
          className="w-28 h-28 image"
        />
      </div>
      <div className="row-span-1 text-sm font-medium">
        <span className="text-xs text-black/60">4pt</span>
        <p>Calabaza Squash</p>
      </div>
      <div className="row-span-2 flex justify-between items-center">
        <span className="font-extrabold text-xl">$15</span>
        <div className="border border-primary flex justify-center items-center p-2 hover:bg-primary hover:text-white rounded-sm text-primary">
          <BsBagPlusFill className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Product;
