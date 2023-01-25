import { ErrorMessage } from "@hookform/error-message";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsCash } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import { FcShipped } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Required from "../../../components/Required/Required";
import ValidationError from "../../../components/ValidationError/ValidationError";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const [creditPayment, setCreditPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const handlePlaceOrder = async (data) => {
    // Block native form submission.
    console.log(data);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handlePlaceOrder)}
      className="text-gray-700 lg:p-5 px-2 py-5 flex flex-col gap-3"
    >
      <h4 className="tori-title">01. Personal Details</h4>
      <div className="grid lg:grid-cols-2 gap-x-5 gap-y-3">
        {/* Name */}
        <div className="">
          <label for="firstname" className="tori-label">
            First name <Required></Required>
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="First name"
            className="tori-input"
            {...register("firstname", {
              required: "Firstname is required!",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="firstname"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <ValidationError
                      key={type}
                      message={message}
                    ></ValidationError>
                  ))
                : null;
            }}
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
            {...register("lastname", {
              required: "Last Name is required!",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="lastname"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <ValidationError
                      key={type}
                      message={message}
                    ></ValidationError>
                  ))
                : null;
            }}
          />
        </div>

        {/* Email */}
        <div className="">
          <label for="email" className="tori-label">
            Email <Required></Required>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="tori-input"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email!",
              },
            })}
          />

          <ErrorMessage
            errors={errors}
            name="email"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <ValidationError
                      key={type}
                      message={message}
                    ></ValidationError>
                  ))
                : null;
            }}
          />
        </div>

        {/* Phone */}
        <div className="">
          <label for="phone" className="tori-label">
            Phone <Required></Required>
          </label>
          <input
            id="phone"
            type="number"
            placeholder="Your Phone Number"
            className="tori-input"
            {...register("phone", {
              required: "Phone number is required!",
            })}
          />

          <ErrorMessage
            errors={errors}
            name="phone"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <ValidationError
                      key={type}
                      message={message}
                    ></ValidationError>
                  ))
                : null;
            }}
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
            {...register("address", {
              required: "Address is required!",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="address"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <ValidationError
                      key={type}
                      message={message}
                    ></ValidationError>
                  ))
                : null;
            }}
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
              {...register("city", {
                required: "City  is required!",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="city"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ValidationError
                        key={type}
                        message={message}
                      ></ValidationError>
                    ))
                  : null;
              }}
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
              {...register("country", {
                required: "Country  is required!",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="country"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ValidationError
                        key={type}
                        message={message}
                      ></ValidationError>
                    ))
                  : null;
              }}
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
              {...register("zip", {
                required: "Zip  is required!",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="zip"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ValidationError
                        key={type}
                        message={message}
                      ></ValidationError>
                    ))
                  : null;
              }}
            />
          </div>
        </div>

        <div className="">
          <label for="shippingCost" className="tori-label">
            Shipping Cost <Required></Required>
          </label>

          <div className="flex justify-between lg:gap-5 gap-2 lg:flex-nowrap flex-wrap">
            <label
              for="fedx"
              className="text-sm flex items-center justify-between gap-2 px-2 py-1 border rounded-md w-full"
            >
              <div className="flex gap-3 items-center">
                <FcShipped className="w-7 h-7" />
                <div>
                  <span className="text-sm">FedEx</span>
                  <small className="block">
                    Delivery Within 24 Hours in{" "}
                    <span className="font-bold">$60</span>
                  </small>
                </div>
              </div>
              <input
                id="fedx"
                type="radio"
                value={60}
                className="icon accent-primary"
                {...register("shippingOption", {
                  required: "Shipping Option is required!",
                })}
              />
            </label>

            <label
              for="ups"
              className="text-sm flex items-center justify-between gap-2 px-2 py-1 border rounded-md w-full"
            >
              <div className="flex gap-3 items-center">
                <FcShipped className="w-7 h-7" />
                <div>
                  <span className="text-sm">UPS</span>
                  <small className="block">
                    Delivery Within 72 Hours in{" "}
                    <span className="font-bold">$20</span>
                  </small>
                </div>
              </div>
              <input
                id="ups"
                type="radio"
                className="icon accent-primary"
                value={20}
                {...register("shippingOption", {
                  required: "Shipping Option is required!",
                })}
              />
            </label>
          </div>
        </div>
      </div>

      <h4 className="tori-title">03. Payment</h4>
      {creditPayment && (
        <div>
          <label className="tori-label">
            Card info <Required></Required>
          </label>
          <div className=" border rounded-md px-2 py-3">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>
      )}
      <div className="flex justify-between lg:gap-5 gap-2 lg:flex-nowrap flex-wrap">
        <label
          onChange={() => setCreditPayment(false)}
          for="cash-on-delivery"
          className="text-sm flex items-center justify-between gap-2 px-2 py-1 border rounded-md w-full"
        >
          <div className="flex gap-3 items-center">
            <BsCash className="w-7 h-7" />
            <div>
              <span className="text-sm">Cash On Delivery</span>
            </div>
          </div>
          <input
            id="cash-on-delivery"
            type="radio"
            value={"Cash On Delivery"}
            className="icon accent-primary"
            {...register("paymentMethod", {
              required: "Payment Method is required!",
            })}
          />
        </label>

        <label
          onChange={() => setCreditPayment(true)}
          for="credit-card"
          className="text-sm flex items-center justify-between gap-2 px-2 py-1 border rounded-md w-full"
        >
          <div className="flex gap-3 items-center">
            <FaRegCreditCard className="w-7 h-7" />
            <div>
              <span className="text-sm">Credit Card</span>
            </div>
          </div>
          <input
            id="credit-card"
            type="radio"
            value={"Credit Card"}
            className="icon accent-primary"
            {...register("paymentMethod", {
              required: "Payment Method is required!",
            })}
          />
        </label>
      </div>

      <div className="flex lg:gap-5 gap-2 lg:flex-nowrap flex-wrap">
        <button className="tori-btn-accent">Continue Shopping</button>
        <button
          // onClick={() => navigate("/invoice")}
          className="tori-btn-secondary"
          disabled={creditPayment && !stripe}
          type="submit"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
