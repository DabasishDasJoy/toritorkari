import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import CategoriesDropdown from "../../../../components/CategoriesDropdown/CategoriesDropdown";
import "./BottomHeader.css";

const BottomHeader = () => {
  return (
    <div className="px-10 py-2 lg:flex hidden justify-between border-b text-black text-[16px] font-medium">
      <div className="flex gap-3">
        {/* Categories */}
        <div className="dropdown h-full dropdown-bottom">
          <label
            tabIndex={0}
            className="cursor-pointer w-full h-full text-center flex items-center gap-1 justify-center"
          >
            Categories <AiOutlineCaretDown className="w-3 h-3" />
          </label>
          <CategoriesDropdown idText={"bottomHeader"}></CategoriesDropdown>
        </div>

        <NavLink
          to={"/offers"}
          className={
            " bg-warning/20 text-warning rounded-sm px-2 relative indicator"
          }
        >
          Offer
          <span className="live absolute w-2 h-2 rounded-full -top-1 -right-1 "></span>
        </NavLink>
        <NavLink className={"tori-link"} to={"/sell"}>
          Sell
        </NavLink>
        <NavLink className={"tori-link"} to={"/customer-service"}>
          Customer Service
        </NavLink>
      </div>
      <div className="flex gap-5">
        <NavLink className={"tori-link"} to={"/privacy"}>
          Privacy Policy
        </NavLink>
        <NavLink className={"tori-link"} to={"/terms-and-conditions"}>
          Terms & Conditions
        </NavLink>
      </div>
    </div>
  );
};

export default BottomHeader;
