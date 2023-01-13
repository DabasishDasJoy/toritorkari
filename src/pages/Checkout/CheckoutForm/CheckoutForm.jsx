import React from "react";
import { FcShipped } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Required from "../../../components/Required/Required";

const CheckoutForm = () => {
  const navigate = useNavigate();
  return (
    <div className="text-black lg:p-5 px-2 py-5 flex flex-col gap-3">
      <h4 className="tori-title">01. Personal Details</h4>
      <div className="grid lg:grid-cols-2 gap-x-5 gap-y-3">
        <div className="">
          <label for="firstname" className="tori-label">
            First name <Required></Required>
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="First name"
            className="tori-input"
          />
        </div>
        <div className="">
          <label for="lastname" className="tori-label">
            Last name <Required></Required>
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Last name"
            className="tori-input"
          />
        </div>
        <div className="">
          <label for="email" className="tori-label">
            Email <Required></Required>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="tori-input"
          />
        </div>
        <div className="">
          <label for="phone" className="tori-label">
            Phone <Required></Required>
          </label>
          <input
            id="phone"
            type="number"
            placeholder="Your Phone Number"
            className="tori-input"
          />
        </div>
      </div>

      <h4 className="tori-title">02. Shipping Details</h4>
      <div className="flex flex-col lg:gap-3 gap-y-3">
        <div className="">
          <label for="address" className="tori-label">
            Address <Required></Required>
          </label>
          <textarea
            id="address"
            type="text"
            placeholder="Adress"
            className="tori-input"
          />
        </div>

        <div className="flex justify-between lg:flex-nowrap flex-wrap gap-3">
          <div className="w-full">
            <label for="city" className="tori-label">
              City <Required></Required>
            </label>
            <input
              id="city"
              type="text"
              placeholder="City"
              className="tori-input"
            />
          </div>
          <div className="w-full">
            <label for="country" className="tori-label">
              Country <Required></Required>
            </label>
            <input
              id="country"
              type="text"
              placeholder="Country"
              className="tori-input"
            />
          </div>
          <div className="w-full">
            <label for="zip" className="tori-label">
              Zip Code <Required></Required>
            </label>
            <input
              id="zip"
              type="number"
              placeholder="Zip Code"
              className="tori-input"
            />
          </div>
        </div>

        <div className="">
          <label for="shippingCost" className="tori-label">
            Shipping Cost <Required></Required>
          </label>

          <div className="flex justify-between lg:gap-10 gap-2 lg:flex-nowrap flex-wrap">
            <div className="text-sm flex items-center justify-between gap-2 px-3 border rounded-md w-full">
              <div className="flex gap-3 items-center">
                <FcShipped className="w-10 h-10" />
                <div>
                  <span className="text-base">FedEx</span>
                  <small className="block">
                    Delivery Within 24 Hours in{" "}
                    <span className="font-bold">$60</span>
                  </small>
                </div>
              </div>
              <input type="radio" name="radio-1" className="icon" />
            </div>

            <div className="text-sm flex items-center justify-between gap-2 px-3 border rounded-md w-full">
              <div className="flex gap-3 items-center">
                <FcShipped className="w-10 h-10" />
                <div>
                  <span className="text-base">UPS</span>
                  <small className="block">
                    Delivery Within 72 Hours in{" "}
                    <span className="font-bold">$20</span>
                  </small>
                </div>
              </div>
              <input type="radio" name="radio-1" className="icon" />
            </div>
          </div>
        </div>
      </div>

      <h4 className="tori-title">03. Payment</h4>
      <div>Payment</div>

      <div className="flex lg:gap-5 gap-2 lg:flex-nowrap flex-wrap">
        <button className="w-full bg-accent text-white rounded-md py-2">
          Continue Shopping
        </button>
        <button
          onClick={() => navigate("/invoice")}
          className="tori-btn-secondary w-full"
          type="submit"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
