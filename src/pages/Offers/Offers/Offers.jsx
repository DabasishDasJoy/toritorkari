import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>ToriTorkari Bazar - Offers</title>
        <meta
          name="description"
          content="Explore offers provided by the shop"
        />
      </Helmet>
      <PageBanner></PageBanner>

      <div className="lg:px-10 py-16 grid lg:grid-cols-2 lg:gap-x-10 gap-y-5 bg-[#F9FAFB]">
        {isLoading ? (
          <Loader></Loader>
        ) : (
          offers?.map((offer) => (
            <Coupon key={offer?._id} refetch={refetch} offer={offer}></Coupon>
          ))
        )}
      </div>
    </div>
  );
};

export default Offers;
