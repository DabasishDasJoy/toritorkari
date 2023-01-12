import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsBrightnessHigh } from "react-icons/bs";
import { CgUnavailable } from "react-icons/cg";
import { FiDollarSign } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

const ProductFeature = () => {
  return (
    <div className="bg-[#F9FAFB] lg:col-span-1 py-5 rounded-md justify-center flex px-5 flex-col gap-2 text-sm text-[#6b7280]">
      <span className="flex gap-2 items-center">
        <MdOutlineLocalShipping className="icon" />
        <p>
          Free shipping over shipping <span className="font-bold">$100</span>
        </p>
      </span>
      <span className="flex gap-2 items-center ">
        <BiHomeAlt className="icon" />
        <p>
          Home Delivery within <span className="font-bold">1 Hour</span>
        </p>
      </span>
      <span className="flex gap-2 items-center">
        <FiDollarSign className="icon" />
        <p>Cash on Delivery Available</p>
      </span>
      <span className="flex gap-2 items-center">
        <TbTruckReturn className="icon" />
        <p>7 Days returns money back guarantee</p>
      </span>
      <span className="flex gap-2 items-center">
        <CgUnavailable className="icon" />
        <p>Warranty not available this item</p>
      </span>
      <span className="flex gap-2 items-center">
        <BsBrightnessHigh className="icon" />
        <p>Guaranteed 100% organic from natural products.</p>
      </span>
      <span className="flex gap-2 items-center">
        <GoLocation className="icon" />
        <p>
          Delivery from our pick point Cecilia Chapman, 561-4535 Nulla LA,
          United States 96522
        </p>
      </span>
    </div>
  );
};

export default ProductFeature;
