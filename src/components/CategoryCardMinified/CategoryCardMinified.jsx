import React from "react";

const CategoryCardMinified = () => {
  return (
    <div className="w-24 flex flex-col gap-1 justify-center items-center h-auto p-3 bg-white rounded-md text-black">
      <div className="p-2 flex items-center justify-center shadow-lg rounded-full">
        <img
          src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=48&q=75"
          alt=""
          className="w-7 h-7"
        />
      </div>
      <small>Drinks</small>
    </div>
  );
};

export default CategoryCardMinified;
