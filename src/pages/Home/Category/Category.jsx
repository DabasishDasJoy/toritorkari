import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Category = () => {
  return (
    <div className="grid grid-cols-6 bg-white p-3 gap-3 rounded-sm text-sm text-black hover:text-primary shadow-sm hover:shadow-2xl">
      <div className="flex items-center justify-center col-span-2">
        <img
          src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75"
          alt=""
        />
      </div>
      <div className="col-span-4">
        <h6 className="">Fish & Meat</h6>
        <p className="flex items-center gap-1 text-black/70">
          <BiChevronRight /> Fish
        </p>
        <p className="flex items-center gap-1 text-black/70">
          {" "}
          <BiChevronRight /> Meat
        </p>
      </div>
    </div>
  );
};

export default Category;
