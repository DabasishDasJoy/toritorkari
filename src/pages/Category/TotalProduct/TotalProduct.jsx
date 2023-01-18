import React from "react";

const TotalProduct = () => {
  return (
    <div className="lg:px-10 px-2 pt-5">
      <div className="bg-[#FFEDD5] text-sm rounded-sm p-3 flex justify-between items-center text-black">
        <p>
          <span className="font-bold">12</span> Items found on Category
        </p>
        <select className="rounded-sm px-2 py-1 h-full text-black/70 focus:outline-none">
          <option disabled selected>
            Sort By Price
          </option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default TotalProduct;
