import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../../AxiosInstance/AxiosInstance";
import Loader from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";
import Pagination from "../../components/Pagination/Pagination";
import Product from "../../components/Product/Product";
import Categories from "../Category/Categories/Categories";
import CategoryAds from "../Category/CategoryAds/CategoryAds";
import TotalProduct from "../Category/TotalProduct/TotalProduct";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [sort, setSort] = useState("default");
  const [size, setSize] = useState(12);
  const [page, setPage] = useState(0);

  const {
    data: { data } = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [query, sort, page, size],
    queryFn: () => {
      return axios.get(
        `/search?query=${query}&sort=${sort}&page=${page}&size=${size}`
      );
    },
  });
  const products = data?.result;
  const pages = Math.ceil(data?.dataCount / size) || 0;

  return (
    <div className="bg-[#F9FAFB] section">
      <CategoryAds></CategoryAds>
      <Categories></Categories>
      <TotalProduct
        refetch={refetch}
        setSort={setSort}
        totalProuducts={products?.length}
      ></TotalProduct>

      <div className="grid lg:grid-cols-6 grid-cols-2 sub-section gap-3">
        {isLoading ? (
          <Loader></Loader>
        ) : products?.length ? (
          products?.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))
        ) : (
          <NotFound></NotFound>
        )}
      </div>

      {/* Pagination */}
      <Pagination page={page} setPage={setPage} pages={pages}></Pagination>
    </div>
  );
};

export default SearchResult;
