import React from "react";
import { AiOutlineArrowRight, AiOutlineRight } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import CartItem from "../CartItem/CartItem";
const MyCart = () => {
  return (
    <>
      {/* Top section */}
      <div className="bg-primary px-3 py-2 fixed w-full top-0 text-white flex justify-between items-center">
        <h3 className="font-semibold text-base leading-9 uppercase flex gap-2 items-center">
          <BsBagCheck className="icon" /> My Cart
        </h3>
        <label htmlFor="cart-drawer">
          <AiOutlineRight className="icon" />
        </label>
      </div>
      {/* Top section end */}

      {/* Cart Items */}
      <div className="mt-[65px]">
        {[...Array(5).keys()].map((idx) => (
          <CartItem></CartItem>
        ))}
      </div>
      {/* Cart Items End */}

      {/* checkout */}
      <div className="px-2 py-2 fixed w-full bottom-0">
        <button className="btn-primary text-white w-full rounded-sm p-2 flex items-center justify-between">
          <span className="bg-white text-primary font-bold px-2 rounded-sm">
            $500
          </span>
          <span className="flex items-center gap-1 uppercase text-sm font-semibold">
            Checkout <AiOutlineArrowRight />
          </span>
        </button>
      </div>
    </>
  );
};

export default MyCart;
