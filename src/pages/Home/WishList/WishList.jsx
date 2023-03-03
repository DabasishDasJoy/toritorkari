import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import SidebarHeader from "../../../components/SidebarHeader/SidebarHeader";
import EmptyCart from "../../MyCart/EmptyCart/EmptyCart";

const WishList = () => {
  return (
    <>
      {/* Top section */}
      <SidebarHeader
        title={"My Wishlist"}
        position={"right-0"}
        drawer={"cart-drawer"}
      >
        <BsChevronDoubleRight className="icon" />
      </SidebarHeader>
      {/* Top section end */}

      {/* Cart Items */}
      <div className="my-[60px] overflow-y-scroll w-[350px] h-full">
        <EmptyCart text={"Wishlist"}></EmptyCart>
      </div>
      {/* Cart Items End */}
    </>
  );
};

export default WishList;
