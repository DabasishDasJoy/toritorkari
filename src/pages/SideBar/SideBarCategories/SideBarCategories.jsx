import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";

const SideBarCategories = () => {
  const {
    isLoading,
    error,
    refetch,
    data: { data: categories } = [],
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return axios.get("/categories");
    },
  });
  console.log(categories);
  return (
    <div className="flex flex-col divide-y-2 overflow-auto h-full mt-20">
      {isLoading ? (
        <Loader></Loader>
      ) : (
        categories?.map((category) => (
          <Link
            to={`/category/${category?._id}?subcategory=all`}
            className="text-gray-700 p-2"
          >
            {category?.categoryName}
          </Link>
        ))
      )}
    </div>
  );
};

export default SideBarCategories;
