import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import OrderSummary from "../OrderSummary/OrderSummary";

const Checkout = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PK);

  return (
    <div className="sub-section bg-[#F9FAFB] flex lg:flex-nowrap flex-wrap justify-between gap-5">
      <div className="lg:w-[65%] bg-white rounded-md lg:order-1 order-2">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>

      <div className="lg:w-[30%] relative transition-all delay-75 lg:order-2 order-1">
        <OrderSummary></OrderSummary>
      </div>
    </div>
  );
};

export default Checkout;
