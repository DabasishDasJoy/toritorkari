import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronDoubleRight } from "react-icons/bs";
import SidebarHeader from "../../../components/SidebarHeader/SidebarHeader";
import CartItem from "../CartItem/CartItem";
const MyCart = () => {
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
        {[...Array(10).keys()].map((idx) => (
          <CartItem></CartItem>
        ))}
      </div>
      {/* Cart Items End */}

      {/* checkout */}
      <div className="px-2 py-2 fixed w-full bottom-0">
        <button className="btn-primary text-white w-full rounded-sm p-2 flex items-center justify-between">
          <span className="bg-white text-primary font-bold px-2 rounded-sm">
            $500
          </span>
          <span className="flex items-center gap-1 uppercase text-sm font-semibold">
            Checkout <AiOutlineArrowRight />
          </span>
        </button>
      </div>
    </>
  );
};

export default MyCart;
