import React from "react";
import { ImFilesEmpty } from "react-icons/im";

const EmptyOrders = () => {
  return (
    <div className="px-7 h-full flex flex-col justify-center items-center">
      <div className="rounded-full p-5 bg-primary/25">
        <ImFilesEmpty className="w-10 h-10 text-primary" />
      </div>
      <div className="text-neutral text-center">
        <h5 className="font-bold">You did not place any order</h5>
        <p className="text-sm text-gray-500">Please add place your orders.</p>
      </div>
    </div>
  );
};

export default EmptyOrders;
