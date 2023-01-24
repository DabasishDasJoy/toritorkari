import React from "react";
import { BsBagCheck } from "react-icons/bs";

const SidebarHeader = ({ children, title, position, drawer }) => {
  return (
    <div
      className={`bg-secondary px-3 py-3 fixed right-0 left-0 top-0 ${position} flex justify-between items-center`}
    >
      <h3 className="font-semibold text-base  uppercase flex gap-2 items-center">
        <BsBagCheck className="icon" /> {title}
      </h3>
      <label htmlFor={`${drawer}`}>{children}</label>
    </div>
  );
};

export default SidebarHeader;
