import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="grid grid-cols-6 bg-white p-3 cursor-pointer gap-3 rounded-sm text-sm text-black hover:text-primary shadow-sm hover:shadow-2xl transition-all delay-[30ms]">
      <div className="flex items-center justify-center col-span-2">
        <img
          src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75"
          alt=""
        />
      </div>
      <div className="col-span-4">
        <h6 className="mb-1">Fish & Meat</h6>
        <Link className="link flex items-center gap-1 text-black/70">
          <BiChevronRight /> Fish
        </Link>
        <Link className="flex link items-center gap-1 text-black/70">
          {" "}
          <BiChevronRight /> Meat
        </Link>
      </div>
    </div>
  );
};

export default Category;
