import React from "react";
import { HiShoppingBag } from "react-icons/hi";

const EmptyCart = () => {
  return (
    <div className="px-7 h-full flex flex-col justify-center items-center">
      <div className="rounded-full p-5 bg-primary/25">
        <HiShoppingBag className="w-10 h-10 text-primary" />
      </div>
      <div className="text-neutral text-center">
        <h5 className="font-bold">Your cart is Empty</h5>
        <p className="text-sm text-gray-500">
          Please add products in your cart.
        </p>
      </div>
    </div>
  );
};

export default EmptyCart;
