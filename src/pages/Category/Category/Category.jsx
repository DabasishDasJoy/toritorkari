import React from "react";
import Product from "../../../components/Product/Product";
import Categories from "../Categories/Categories";
import CategoryAds from "../CategoryAds/CategoryAds";
import TotalProduct from "../TotalProduct/TotalProduct";

const Category = () => {
  return (
    <div className="bg-[#F9FAFB] section">
      <CategoryAds></CategoryAds>
      <Categories></Categories>
      <TotalProduct></TotalProduct>
      <div className="grid lg:grid-cols-6 grid-cols-2 sub-section gap-3">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
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
