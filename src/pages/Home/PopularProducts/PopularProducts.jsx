import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";
import Product from "../../../components/Product/Product";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

const PopularProducts = () => {
  const {
    isLoading,
    error,
    refetch,
    data: { data: products } = [],
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return axios.get("/products/popular");
    },
  });

  return (
    <div className="bg-[#F9FAFB] section">
      <SectionHeader
        subtitle={
          "See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping"
        }
      >
        Popular Products for Daily Shopping
      </SectionHeader>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="sub-section grid lg:grid-cols-6 grid-cols-2 gap-3">
          {products?.map((product) => (
            <Product key={product?._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularProducts;
