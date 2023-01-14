import React from "react";
import { AiFillGift } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
const Supports = () => {
  return (
    <div className="flex text-black sub-section lg:justify-around justify-evenly gap-2 flex-wrap">
      <p className=" flex gap-2 items-center text-sm">
        <TbTruckDelivery className="text-primary w-5 h-5" /> Free Shipping From
        $500
      </p>

      <p className=" flex gap-2 items-center text-sm">
        <FiPhoneCall className="text-primary w-4 h-4" /> Support 24/7
      </p>
      <p className=" flex gap-2 items-center text-sm">
        <RiSecurePaymentLine className="text-primary icon" /> Secure Payment
      </p>

      <p className=" flex gap-2 items-center text-sm">
        <AiFillGift className="text-primary icon" /> Latest Offer Upto 20% Off
      </p>
    </div>
  );
};

export default Supports;
