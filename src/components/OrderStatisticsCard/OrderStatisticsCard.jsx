import React from "react";

const OrderStatisticsCard = ({ text, number, children }) => {
  return (
    <div className="border w-full rounded-md text-base p-2 flex justify-center items-center gap-2">
      {/* image */}
      {children}

      <div className="text-sm text-center text-gray-800">
        <p>{text}</p>
        <span className="font-bold text-base">{number}</span>
      </div>
    </div>
  );
};

export default OrderStatisticsCard;
