import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCardMinified = ({ category: { categoryName, _id, image } }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/category/${_id}?subcategory=all`)}
      className="w-24 hover:shadow-lg cursor-pointer flex flex-col gap-1 justify-center items-center h-auto p-2 lg:my-2 bg-white rounded-md text-black"
    >
      <div className="p-2 flex items-center justify-center shadow-lg rounded-full">
        <img src={image} alt="" className="w-7 h-7" />
      </div>
      <small className="text-xs text-center">{categoryName}</small>
    </div>
  );
};

export default CategoryCardMinified;
