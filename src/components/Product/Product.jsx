import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagPlusFill } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import "./Product.css";
const Product = () => {
  return (
    <div className="text-black/90 grid grid-rows-7 gap-1 bg-white rounded-sm p-2 product relative">
      <span
        className={`bg-accent rounded-sm rounded-r-full text-[13px] font-semibold py-[2px] z-10 absolute text-white px-2 top-1 left-0`}
      >
        10% Off
      </span>

      {/* <div
        className={`absolute top-0 bg-no-repeat border bg-cover flex justify-center items-center bg-center z-10`}
        style={{
          backgroundImage:
            "url('https://htmldemo.net/alula/alula/assets/img/icons/green-discount-label.webp')",
        }}
      >
        <p className="text-xs text-white mx-2 py-3">10% off</p>
      </div> */}

      {/* View Or add to favourite */}
      <div className="flex action flex-col items-center justify-center  p-[2px] gap-2 bg-gray-100 rounded-full absolute bottom-[30%] right-2 z-10 ">
        <label
          htmlFor="product-modal"
          className=" transition-all cursor-pointer delay-[100ms] hover:bg-primary text-black/70 hover:text-white rounded-full p-1"
        >
          <FiEye className="" />
        </label>
        <button className=" transition-all delay-[100ms] hover:bg-primary text-black/70 hover:text-white rounded-full p-1">
          <AiOutlineHeart className="" />
        </button>
      </div>
      {/* end */}

      <label
        htmlFor="product-modal"
        className="row-span-4 cursor-pointer flex justify-center items-center py-2"
      >
        <img
          src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FbvrsZtMt%2FCalabaza-Squash-Package-each.jpg&w=256&q=75"
          alt=""
          className="w-24 h-24 image"
        />
      </label>
      <div className="row-span-1 text-sm font-medium ">
        <span className="text-xs text-black/60">4pt</span>
        <p>Calabaza Squash</p>
      </div>
      <div className="row-span-2 flex justify-between items-center">
        <span className="price">
          $15 <span className=" text-sm  line-through text-black/50">$10</span>
        </span>
        {/* <StatusTag color={"warning"}>Stock Out</StatusTag> */}
        <div className="border border-primary flex justify-center items-center p-2 cursor-pointer transition-all delay-[30ms] hover:bg-primary hover:text-white rounded-sm text-primary">
          <BsBagPlusFill className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Product;
