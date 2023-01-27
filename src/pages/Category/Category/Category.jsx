import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";
import NotFound from "../../../components/NotFound/NotFound";
import Product from "../../../components/Product/Product";
import Categories from "../Categories/Categories";
import CategoryAds from "../CategoryAds/CategoryAds";
import TotalProduct from "../TotalProduct/TotalProduct";

const Category = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const subCat = searchParams.get("subCat");

  // Fetch Products
  const {
    data: { data: products } = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [id, subCat],
    queryFn: () => {
      return axios.get(`/category/${id}?subCat=${subCat}`);
    },
  });

  return (
    <div className="bg-[#F9FAFB] section">
      <CategoryAds></CategoryAds>
      <Categories></Categories>
      <TotalProduct totalProuducts={products?.length}></TotalProduct>
      <div className="grid lg:grid-cols-6 grid-cols-2 sub-section gap-3">
        {isLoading ? (
          <Loader></Loader>
        ) : products?.length ? (
          products?.map((product) => (
            <Product
              refetch={refetch}
              key={product._id}
              product={product}
            ></Product>
          ))
        ) : (
          <NotFound></NotFound>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2">
        {[...Array(5).keys()].map((idx) => (
          <button
            className="border-black/20 border px-2 transition-all delay-75 hover:bg-primary rounded-sm text-black/80 hover:text-white"
            key={idx}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
