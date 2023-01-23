import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const CartItem = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex gap-5 items-center justify-center px-5 py-2  hover:bg-slate-50 cursor-pointer">
      <div className="">
        <img src={cartItem?.image} alt="" className="w-10 h-full rounded-lg" />
      </div>

      <div className="">
        <h5 className="text-sm font-medium leading-6 text-[#374151]">
          {cartItem?.name}
        </h5>
        <p className="text-xs leading-5 text-gray-500">
          Item Price: ${cartItem?.price}
        </p>

        <div className="flex justify-between gap-3 mt-1 items-center">
          <span className="text-black text-sm font-bold">$12.00</span>
          <div className="flex border text-[#374151] font-semibold items-center">
            <button
              className="px-2 hover:bg-white"
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </button>
            <span className="px-2 text-sm">{quantity}</span>
            <button
              className="px-2 hover:bg-white"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Delete */}

          <button className="bg-warning/5 hover:bg-warning/20 hover:shadow-md p-2 rounded-full">
            <FaRegTrashAlt className="text-warning" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
