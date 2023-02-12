import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({
  category: { _id, categoryName, image, subCategories },
}) => {
  const navigate = useNavigate();
  const [subCat, setSubCat] = useState("all");

  return (
    <div
      onClick={() =>
        navigate(`/category/${_id}?subcategory=${subCat.toLowerCase()}`)
      }
      className="grid lg:grid-cols-6 bg-white px-2 py-3 cursor-pointer rounded-sm text-sm text-black/80 hover:text-primary shadow-sm hover:shadow-2xl transition-all delay-[30ms]"
    >
      <div className="flex items-center justify-center lg:col-span-2">
        <img src={image} alt="" className="lg:w-[50%]" />
      </div>
      <div className="lg:col-span-4 text-center lg:text-left">
        <h6 className="mb-1 text-sm">{categoryName}</h6>
        <div className="flex flex-col gap-1 lg:items-start items-center">
          {subCategories?.map((subCategory, idx) => (
            <span
              onMouseEnter={() => setSubCat(subCategory.replace("&", "%26"))}
              onMouseLeave={() => setSubCat("all")}
              key={Math.random()}
              className="tori-link flex items-center gap-1 text-xs text-black/70"
            >
              <BiChevronRight /> {subCategory}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
