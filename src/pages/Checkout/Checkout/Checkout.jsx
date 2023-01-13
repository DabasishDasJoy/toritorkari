import React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import OrderSummary from "../OrderSummary/OrderSummary";

const Checkout = () => {
  return (
    <div className="sub-section bg-[#F9FAFB] flex lg:flex-nowrap flex-wrap justify-between gap-5">
      <div className="lg:w-[70%] bg-white rounded-md lg:order-1 order-2">
        <CheckoutForm></CheckoutForm>
      </div>

      <div className="lg:w-[30%] relative transition-all delay-75 lg:order-2 order-1">
        <OrderSummary></OrderSummary>
      </div>
    </div>
  );
};

export default Checkout;
