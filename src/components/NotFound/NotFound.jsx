import React from "react";
import { BsEmojiFrown } from "react-icons/bs";
import noResult from "../../assets/no-result.svg";

const NotFound = () => {
  return (
    <div className="col-span-full flex flex-col text-[16px] justify-center items-center gap-2 my-2">
      <img src={noResult} alt="" className="w-[30%]" />
      <p className="text-warning flex gap-1 items-center">
        <BsEmojiFrown /> Sorry! Cannot find these products.
      </p>
    </div>
  );
};

export default NotFound;
