import React from "react";
import { NavLink } from "react-router-dom";
import "./BottomHeader.css";

const BottomHeader = () => {
  return (
    <div className="px-10 py-2 flex justify-between border-b text-black text-sm font-medium">
      <div className="flex gap-5">
        <select className="outline-none border-none">
          <option value="" disabled selected>
            Categories
          </option>
          <option value="" disabled selected>
            Categories
          </option>
          <option value="" disabled selected>
            Categories
          </option>
          <option value="" disabled selected>
            Categories
          </option>
        </select>
        <NavLink>Todays Deal</NavLink>
        <NavLink
          to={"/offer"}
          className={
            "bg-warning/20 text-warning rounded-sm px-2 relative indicator"
          }
        >
          Offer
          <span className="live absolute w-2 h-2 rounded-full -top-1 -right-1 "></span>
        </NavLink>
        <NavLink>Sell</NavLink>
        <NavLink>Customer Service</NavLink>
      </div>
      <div className="flex gap-5">
        <NavLink>Privacy Policy</NavLink>
        <NavLink>Terms & Conditions</NavLink>
      </div>
    </div>
  );
};

export default BottomHeader;
