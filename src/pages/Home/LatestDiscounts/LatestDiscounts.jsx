import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";
import Product from "../../../components/Product/Product";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

const LatestDiscounts = () => {
  const {
    isLoading,
    error,
    refetch,
    data: { data: discounts } = [],
  } = useQuery({
    queryKey: ["discounts"],
    queryFn: () => {
      return axios.get("/discounts");
    },
  });

  return (
    <section id="discount" className="bg-[#F9FAFB] section">
      <SectionHeader
        subtitle={
          "See Our latest discounted products below. Choose your daily needs from here and get a special discount with free shipping."
        }
      >
        Latest Dicounted Products
      </SectionHeader>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="grid lg:grid-cols-6 grid-cols-2 gap-3 sub-section">
          {discounts?.map((discount) => (
            <Product key={discount?._id} product={discount}></Product>
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestDiscounts;
