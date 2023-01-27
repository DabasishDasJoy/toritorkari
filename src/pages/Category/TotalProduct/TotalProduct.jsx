import React from "react";

const TotalProduct = ({ totalProuducts, setSort }) => {
  return (
    <div className="lg:px-10 px-2 pt-5">
      <div className="bg-[#FFEDD5] text-sm rounded-sm p-3 flex justify-between items-center text-black">
        <p>
          {totalProuducts ? "Total " : ""}
          <span className="font-bold">
            {totalProuducts ? totalProuducts : "No"}
          </span>{" "}
          Items found.
          {/* <span className="font-bold">{categoryName}</span> */}
        </p>
        <select
          onChange={(e) => setSort(e.target.value)}
          className="rounded-sm px-2 py-1 h-full text-black/70 focus:outline-none"
        >
          <option disabled selected>
            Sort By Price
          </option>
          <option value={"ascending"}>Low to High</option>
          <option value={"descending"}>High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default TotalProduct;
