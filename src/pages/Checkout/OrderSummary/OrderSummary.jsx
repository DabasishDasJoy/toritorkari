import React, { useContext, useState } from "react";
import Loader from "../../../components/Loader/Loader";
import { CartContext } from "../../../Contexts/CartProvider/CartProvider";
import useGetSubTotal from "../../../Hooks/useGetSubTotal/useGetSubTotal";
import CartItem from "../../MyCart/CartItem/CartItem";
import EmptyCart from "../../MyCart/EmptyCart/EmptyCart";

const OrderSummary = () => {
  const { cartItems, isLoading } = useContext(CartContext);
  const [shippingCost, setShippingCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [subTotal] = useGetSubTotal();
  const grandTotal = subTotal - discount + shippingCost;

  const handleApplyDiscount = (e) => {
    e.preventDefault();
    console.log(e.target.promo.value);
    setDiscount(parseFloat(((10 / 100) * subTotal).toFixed(2)));
  };

  return (
    <div className="py-3 sticky top-0 bg-white rounded-md flex flex-col gap-3 border">
      <h4 className="tori-title text-gray-700 text-center">Order Summury</h4>
      <hr />
      <div className="h-[300px] overflow-y-scroll flex items-center flex-col">
        {isLoading ? (
          <Loader></Loader>
        ) : cartItems?.length ? (
          cartItems?.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem?._id}></CartItem>
          ))
        ) : (
          <EmptyCart></EmptyCart>
        )}
      </div>
      <form
        onSubmit={(e) => handleApplyDiscount(e)}
        className="flex gap-2 justify-center lg:px-5 px-2"
      >
        <input
          name="promo"
          type="text"
          placeholder="Enter Discount Code"
          className="tori-input w-full"
        />
        <button type="submit" className="tori-btn-secondary">
          Apply
        </button>
      </form>
      <div className="lg:px-5 px-2 flex flex-col gap-1 text-black/80 text-sm font-medium">
        <div className="flex justify-between ">
          <p>Subtotal</p>
          <p>${parseFloat(subTotal.toFixed(2))}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Cost</p>
          <p>${parseFloat(shippingCost)}</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p>${parseFloat(discount)}</p>
        </div>
        <hr />
        <div className="flex justify-between font-extrabold text-lg text-primary">
          <p>Total</p>
          <p>${parseFloat(grandTotal.toFixed(2))}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
