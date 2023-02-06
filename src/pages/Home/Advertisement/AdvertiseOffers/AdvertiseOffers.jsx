import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "../../../../AxiosInstance/AxiosInstance";
import Coupon from "../../../../components/Coupon/Coupon";
import Loader from "../../../../components/Loader/Loader";

const AdvertiseOffers = () => {
  const {
    isLoading,
    error,
    refetch,
    data: { data: offers } = [],
  } = useQuery({
    queryKey: ["offer"],
    queryFn: () => {
      return axios.get(`/offers?size=${2}`);
    },
  });

  return (
    <div className="border-2 lg:text-base text-sm tori-bg-gray rounded-md border-warning hover:border-primary lg:col-span-2 overflow-hidden">
      <div className="bg-[#FFEDD5] text-black text-center py-2 font-medium">
        Latest Super Discount Active Coupon Code
      </div>

      <div className="flex flex-col gap-2 items-center justify-center px-2 py-4">
        {isLoading ? (
          <Loader></Loader>
        ) : (
          offers?.map((offer) => (
            <Coupon offer={offer} key={offer?._id}></Coupon>
          ))
        )}
      </div>
    </div>
  );
};

export default AdvertiseOffers;
