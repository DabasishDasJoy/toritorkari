import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "../../../AxiosInstance/AxiosInstance";
import Description from "../Description/Description";
import Reviews from "../Reviews/Reviews/Reviews";
const DescriptionOrReview = ({ selectedProduct }) => {
  // Fetch Reviews
  const {
    isLoading,
    error,
    refetch,
    data: { data: reviews } = [],
  } = useQuery({
    queryKey: ["reviews", selectedProduct?._id],
    queryFn: () => {
      return axios.get(`/reviews/${selectedProduct?._id}`);
    },
  });

  const [isDesc, setIsDesc] = useState(true);

  return (
    <div className="my-10 bg-white py-3 text-sm rounded-sm">
      {/* Header */}
      <div className="border-b transition-all delay-75 flex justify-center gap-10 font-semibold text-gray-700">
        <button
          onClick={() => setIsDesc(true)}
          className={`border-b-2 py-1 hover:text-gray-700 ${
            isDesc ? "border-primary" : "border-white text-gray-500"
          }`}
        >
          Descrition
        </button>
        <button
          onClick={() => setIsDesc(false)}
          className={`border-b-2 py-1  hover:text-gray-700 ${
            !isDesc ? "border-primary" : "border-white text-gray-500"
          }`}
        >
          Reviews
        </button>
      </div>

      {isDesc ? (
        <Description desc={selectedProduct?.desc}></Description>
      ) : (
        <Reviews
          selectedProduct={selectedProduct}
          reviews={reviews}
          isLoading={isLoading}
          refetch={refetch}
        ></Reviews>
      )}
    </div>
  );
};

export default DescriptionOrReview;
