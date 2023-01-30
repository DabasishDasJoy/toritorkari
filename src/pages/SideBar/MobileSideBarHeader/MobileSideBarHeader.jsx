import React from "react";
import { AiOutlineDoubleLeft, AiOutlineUser } from "react-icons/ai";

const MobileSideBarHeader = () => {
  return (
    <div
      className={`bg-secondary px-3 py-1 fixed w-full top-0 left-0 text-black flex justify-between items-center`}
    >
      <button className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <AiOutlineUser />
      </button>

      <h3 className="font-semibold text-base leading-9 flex gap-2 items-center">
        ToriTorkari
      </h3>
      <label htmlFor="mobile-drawer">
        <AiOutlineDoubleLeft className="icon" />
      </label>
    </div>
  );
};

export default MobileSideBarHeader;
