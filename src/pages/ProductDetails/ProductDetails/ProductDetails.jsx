import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";
import ProductDetailsCard from "../../../components/ProductDetailsCard/ProductDetailsCard";
import DescriptionOrReview from "../DescriptionOrReview/DescriptionOrReview";
import ProductFeature from "../ProductFeature/ProductFeature";
const ProductDetails = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    refetch,
    data: { data: selectedProduct } = [],
  } = useQuery({
    queryKey: [id, "product"],
    queryFn: () => {
      return axios.get(`/product/${id}`);
    },
  });

  return (
    <div className="bg-[#F9FAFB] text-black sub-section">
      {/* Bread Cubs */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to={"/"} className="tori-link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/"}>Category</Link>
          </li>
          {/* <li>{selectedProduct?.name}</li> */}
        </ul>
      </div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <ProductDetailsCard
          display={"hidden"}
          selectedProduct={selectedProduct}
        >
          <ProductFeature></ProductFeature>
        </ProductDetailsCard>
      )}
      {/* Description / Review */}
      <DescriptionOrReview
        selectedProduct={selectedProduct}
      ></DescriptionOrReview>

      {/* related products */}
      <div className="">
        <h3 className="text-lg font-bold">Related Products</h3>
        <div className="section grid lg:grid-cols-6 grid-cols-2 gap-3">
          {/* Related Proudcts Here */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
