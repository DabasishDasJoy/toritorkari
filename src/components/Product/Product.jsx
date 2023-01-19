import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagPlusFill } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import StatusTag from "../StatusTag/StatusTag";
import "./Product.css";
const Product = ({ product: { name, image, price, status, subCategory } }) => {
  return (
    <div className="text-black/90 grid grid-rows-7 gap-1 bg-white rounded-sm p-2 product relative">
      <span
        className={`bg-accent rounded-sm rounded-r-full text-[13px] font-semibold py-[2px] z-10 absolute text-white px-2 top-2 left-0`}
      >
        10% Off
      </span>

      <div className="action absolute bottom-[38%] right-0 left-0 z-10">
        <div className="flex max-w-fit mx-auto items-center justify-center p-[2px] gap-2 bg-gray-100 rounded-full">
          <label
            htmlFor="product-modal"
            className=" transition-all cursor-pointer delay-[50ms] hover:bg-primary text-black/60 hover:text-white rounded-full p-1"
          >
            <FiEye className="" />
          </label>
          <button className=" transition-all delay-[50ms] hover:bg-primary text-black/60 hover:text-white rounded-full p-1">
            <AiOutlineHeart className="" />
          </button>
        </div>
      </div>
      {/* end */}

      <label
        htmlFor="product-modal"
        className="row-span-4 cursor-pointer flex justify-center items-center py-2"
      >
        <img src={image} alt="" className="w-28 h-28 image" />
      </label>
      <div className="row-span-1 text-sm font-medium ">
        <div className="flex justify-between items-center">
          <span className="text-xs text-black/60">{subCategory}</span>
          <StatusTag color={"primary"}>{status}</StatusTag>
        </div>
        <p>{name}</p>
      </div>
      <div className="row-span-2 flex justify-between items-center">
        <span className="price">
          ${price}{" "}
          <span className="text-sm  line-through text-black/50">${price}</span>
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
