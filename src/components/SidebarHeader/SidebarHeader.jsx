import React from "react";
import { BsBagCheck } from "react-icons/bs";

const SidebarHeader = ({ children, title, position, drawer }) => {
  return (
    <div
      className={`bg-secondary px-3 py-2 fixed w-full top-0 ${position} text-black flex justify-between items-center`}
    >
      <h3 className="font-semibold text-base leading-9 uppercase flex gap-2 items-center">
        <BsBagCheck className="icon" /> {title}
      </h3>
      <label htmlFor={`${drawer}`}>{children}</label>
    </div>
  );
};

export default SidebarHeader;
