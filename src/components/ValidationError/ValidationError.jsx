import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const ValidationError = ({ message }) => {
  return (
    <small className="flex items-center gap-1 text-warning text-[14px]">
      <BiErrorCircle className="" />
      {message}
    </small>
  );
};

export default ValidationError;
