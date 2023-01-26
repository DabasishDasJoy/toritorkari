import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import useGetSubTotal from "../../../Hooks/useGetSubTotal/useGetSubTotal";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import OrderSummary from "../OrderSummary/OrderSummary";

const Checkout = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PK);

  const [shippingCost, setShippingCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [subTotal] = useGetSubTotal();
  const grandTotal = parseFloat(
    (subTotal - discount + shippingCost || 0).toFixed(2)
  );

  return (
    <div className="sub-section bg-[#F9FAFB] flex lg:flex-nowrap flex-wrap justify-between gap-5">
      <div className="lg:w-[65%] bg-white rounded-md lg:order-1 order-2">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            setShippingCost={setShippingCost}
            grandTotal={grandTotal}
          ></CheckoutForm>
        </Elements>
      </div>

      <div className="lg:w-[30%] relative transition-all delay-75 lg:order-2 order-1">
        <OrderSummary
          shippingCost={shippingCost}
          setShippingCost={setShippingCost}
          discount={discount}
          setDiscount={setDiscount}
          grandTotal={grandTotal}
        ></OrderSummary>
      </div>
    </div>
  );
};

export default Checkout;
