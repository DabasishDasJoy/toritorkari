import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "../../../AxiosInstance/AxiosInstance";
import Coupon from "../../../components/Coupon/Coupon";
import Loader from "../../../components/Loader/Loader";
import PageBanner from "../../../components/PageBanner/PageBanner";

const Offers = () => {
  const {
    isLoading,
    error,
    refetch,
    data: { data: offers } = [],
  } = useQuery({
    queryKey: ["offers"],
    queryFn: () => {
      return axios.get(`/offers`);
    },
  });

  return (
    <div>
      <PageBanner></PageBanner>

      <div className="sub-section grid grid-cols-2 gap-x-10 gap-y-5 bg-[#F9FAFB]">
        {isLoading ? (
          <Loader></Loader>
        ) : (
          offers?.map((offer) => (
            <Coupon key={offer?._id} offer={offer}></Coupon>
          ))
        )}
      </div>
    </div>
  );
};

export default Offers;
