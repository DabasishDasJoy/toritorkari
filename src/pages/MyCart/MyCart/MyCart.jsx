import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";
import SidebarHeader from "../../../components/SidebarHeader/SidebarHeader";
import { getStoredCart } from "../../../utils/fakeDb";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "../EmptyCart/EmptyCart";

const MyCart = () => {
  const location = useLocation();

  // Fetch tha cart items from DB
  const shoppingCart = getStoredCart();

  const {
    isLoading,
    error,
    refetch,
    data: { data: cartItems } = [],
  } = useQuery({
    queryKey: ["shopping-cart"],
    queryFn: () => {
      return axios.post("/shopping-cart", shoppingCart);
    },
  });

  return (
    <>
      {/* Top section */}
      <SidebarHeader
        title={"My Cart"}
        position={"right-0"}
        drawer={"cart-drawer"}
      >
        <BsChevronDoubleRight className="icon" />
      </SidebarHeader>
      {/* Top section end */}

      {/* Cart Items */}
      <div className="my-[65px] divide-y overflow-y-scroll h-full">
        {/* <EmptyCart></EmptyCart> */}
        {isLoading ? (
          <Loader></Loader>
        ) : cartItems ? (
          cartItems?.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem?._id}></CartItem>
          ))
        ) : (
          <EmptyCart></EmptyCart>
        )}
      </div>
      {/* Cart Items End */}

      {/* checkout */}
      <div className="px-2 py-2 fixed w-full bottom-0">
        <Link
          to={"/checkout"}
          state={{ from: location }}
          className="btn-primary text-white w-full rounded-sm p-2 flex items-center justify-between"
        >
          <span className="bg-white text-primary font-bold px-2 rounded-sm">
            $500
          </span>
          <span className="flex items-center gap-1 uppercase text-sm font-semibold">
            Checkout <AiOutlineArrowRight />
          </span>
        </Link>
      </div>
    </>
  );
};

export default MyCart;
