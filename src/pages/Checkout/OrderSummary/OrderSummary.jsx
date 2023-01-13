import React from "react";
import CartItem from "../../MyCart/CartItem/CartItem";

const OrderSummary = () => {
  return (
    <div className="py-3 sticky top-0 bg-white rounded-md flex flex-col gap-3 border">
      <h4 className="tori-title text-black text-center">Order Summury</h4>
      <hr />
      <div className="h-[300px] overflow-y-scroll flex flex-col items-start">
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </div>
      <div className="flex gap-2 justify-center lg:px-5 px-2">
        <input
          type="email"
          placeholder="Enter Discount Code"
          className="tori-input w-full"
        />
        <button className="tori-btn-secondary">Apply</button>
      </div>
      <div className="lg:px-5 px-2 flex flex-col gap-1 text-black/80 text-sm font-medium">
        <div className="flex justify-between ">
          <p>Subtotal</p>
          <p>$177.00</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Cost</p>
          <p>$177.00</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p>$177.00</p>
        </div>
        <hr />
        <div className="flex justify-between font-extrabold text-lg">
          <p>Total</p>
          <p>$177.00</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
