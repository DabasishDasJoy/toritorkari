import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import OrderStatisticsCard from "../OrderStatisticsCard/OrderStatisticsCard";

const OrdersStatistics = () => {
  return (
    <div className="flex lg:flex-nowrap flex-wrap  gap-3 lg:justify-between">
      {/* Total Orders */}
      <OrderStatisticsCard text={"Total Orders"} number={200}>
        <div className="bg-warning/30 text-warning p-2 inline-block rounded-full">
          <BsCartCheck />
        </div>
      </OrderStatisticsCard>

      <OrderStatisticsCard text={"Pending Orders"} number={200}>
        <div className="bg-accent/30 text-accent p-2 inline-block rounded-full">
          <MdPendingActions />
        </div>
      </OrderStatisticsCard>

      <OrderStatisticsCard text={"Processing Orders"} number={200}>
        <div className="bg-[#4F46E5]/30 text-[#4F46E5] p-2 inline-block rounded-full">
          <TbTruckDelivery />
        </div>
      </OrderStatisticsCard>

      <OrderStatisticsCard text={"Completed Orders"} number={200}>
        <div className="bg-primary/30 text-primary p-2 inline-block rounded-full">
          <AiOutlineFileDone />
        </div>
      </OrderStatisticsCard>
    </div>
  );
};

export default OrdersStatistics;
