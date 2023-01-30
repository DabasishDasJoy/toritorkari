import { ErrorMessage } from "@hookform/error-message";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BsCash } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import { FcShipped } from "react-icons/fc";
import { v4 as uuid } from "uuid";
import axios from "../../../AxiosInstance/AxiosInstance";
import ButtonLoader from "../../../components/ButtonLoader/ButtonLoader";
import Required from "../../../components/Required/Required";
import SuccessModal from "../../../components/SuccessModal/SuccessModal";
import ValidationError from "../../../components/ValidationError/ValidationError";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { CartContext } from "../../../Contexts/CartProvider/CartProvider";
import { getRandomId } from "../../../utils/GetRandomId/getRandomId";

const CheckoutForm = ({
  grandTotal,
  setShippingCost,
  discount,
  shippingCost,
}) => {
  const [creditPayment, setCreditPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProccessing] = useState(false);
  const [trasactionId, setTransactionId] = useState("");
  const { user } = useContext(AuthContext);
  const { successModal, cartItems, getQuantityOfItem, removeShoppingCart } =
    useContext(CartContext);
  const [uniqueId, setUniqueId] = useState("");

  const invoiceNumber = getRandomId();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  // Create Payment intent and grab client secret
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    let isMounted = true;

    try {
      axios
        .post(`/create-payment-intent?email=${user?.email}`, { grandTotal })
        .then((res) => {
          if (isMounted) {
            setClientSecret(res?.data?.clientSecret);
          }
        })
        .catch((err) => {
          console.error(err);
          return;
        });
    } catch (error) {
      console.error(error);
    }

    return () => {
      isMounted = false;
    };
  }, [grandTotal, user?.email]);

  /* ===================================== */
  // Handle Order Confirmation
  const handlePlaceOrder = async (data) => {
    setProccessing(true);
    if (!creditPayment) {
      placeOrderInDb(data);
    } else {
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
        console.error("[error]", error);
        toast.error(error.message);
        setProccessing(false);
        return;
      } else {
        console.log("[PaymentMethod]", paymentMethod);
      }

      // Confirm Card Payment
      stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: data?.firstname,
              email: data?.email,
            },
          },
        })
        .then((res) => {
          if (res?.paymentIntent?.status === "succeeded") {
            setTransactionId(res?.paymentIntent?.id);
            // Save payment information in database
            placeOrderInDb(data, res?.paymentIntent?.id);
            // navigate to chekcout page
          }
          setProccessing(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong.Please try again");
          return;
        });
    }
  };

  const createCart = () => {
    const cart = [];
    cartItems.forEach((item) =>
      cart.push({
        name: item?.name,
        price: item?.discount
          ? (item?.price - (item?.discount / 100) * item?.price).toFixed(2)
          : item?.price,
        productId: item?._id,
        quantity: getQuantityOfItem(item?._id),
      })
    );

    return cart;
  };
  const placeOrderInDb = (data, transId) => {
    const unique_id = uuid();
    setUniqueId(unique_id);
    const orderDetails = {
      ...data,
      amount: grandTotal,
      invoiceId: unique_id,
      discount: discount,
      shippingCost: shippingCost,
      cart: createCart(),
      status: creditPayment ? "paid" : "pending",
      invoice: `#${invoiceNumber}`,
      date: new Date(),
      trasactionId: transId,
    };

    // Send to Db
    axios
      .post(`/invoices?email=${user?.email}`, { orderDetails })
      .then((res) => {
        if (res?.data?.acknowledged) {
          //
          // Delete shopping cart
          successModal.current.checked = true;
          removeShoppingCart();
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
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
          <label htmlFor="firstname" className="tori-label">
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
          <label htmlFor="lastname" className="tori-label">
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
          <label htmlFor="email" className="tori-label">
            Email <Required></Required>
          </label>
          <input
            readOnly
            id="email"
            type="email"
            defaultValue={user?.email}
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
          <label htmlFor="phone" className="tori-label">
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
          <label htmlFor="address" className="tori-label">
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
            <label htmlFor="city" className="tori-label">
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
            <label htmlFor="country" className="tori-label">
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
            <label htmlFor="zip" className="tori-label">
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
          <label htmlFor="shippingCost" className="tori-label">
            Shipping Cost <Required></Required>
          </label>

          <div className="flex justify-between lg:gap-5 gap-2 lg:flex-nowrap flex-wrap">
            <label
              htmlFor="fedx"
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
                onClick={() => setShippingCost(60)}
                className="icon accent-primary"
                {...register("shippingOption", {
                  required: "Shipping Option is required!",
                })}
              />
            </label>

            <label
              htmlFor="ups"
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
                onClick={() => setShippingCost(20)}
                {...register("shippingOption", {
                  required: "Shipping Option is required!",
                })}
              />
            </label>
          </div>
          <ErrorMessage
            errors={errors}
            name="shippingOption"
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
      <div>
        <div className="flex justify-between lg:gap-5 gap-2 lg:flex-nowrap flex-wrap">
          <label
            onChange={() => setCreditPayment(false)}
            htmlFor="cash-on-delivery"
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
            htmlFor="credit-card"
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
        <ErrorMessage
          errors={errors}
          name="paymentMethod"
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

      <div className="flex lg:gap-5 gap-2 lg:flex-nowrap flex-wrap">
        <button className="tori-btn-accent">Continue Shopping</button>
        <button
          // onClick={() => navigate("/invoice")}
          className="tori-btn-secondary"
          disabled={!stripe || !clientSecret || processing}
          type="submit"
        >
          Confirm{processing && <ButtonLoader></ButtonLoader>}
        </button>
      </div>
      <SuccessModal
        unique_id={uniqueId}
        trasactionId={trasactionId}
      ></SuccessModal>
    </form>
  );
};

export default CheckoutForm;
