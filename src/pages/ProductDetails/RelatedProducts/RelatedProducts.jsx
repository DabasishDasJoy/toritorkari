import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";
import Product from "../../../components/Product/Product";

const RelatedProducts = ({ from, selectedProduct }) => {
  const fromText = from.split("/");
  const id = fromText[fromText.length - 1];

  const {
    isLoading,
    error,
    refetch,
    data: { data } = [],
  } = useQuery({
    queryKey: ["category", id, selectedProduct],
    queryFn: () => {
      return axios.get(
        `search?query=${selectedProduct?.subCategory}&size=${6}`
      );
    },
  });
  const products = data?.result;

  return (
    <div className="">
      <h3 className="text-lg font-bold">Related Products</h3>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="section grid lg:grid-cols-6 grid-cols-2 gap-3">
          {/* Related Proudcts Here */}
          {products?.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
