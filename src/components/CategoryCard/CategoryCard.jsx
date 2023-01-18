import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const CategoryCard = ({ category: { _id, categoryName, image, tags } }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/category/${_id}`)}
      className="grid grid-cols-6 bg-white px-2 py-3 cursor-pointer gap-2 rounded-sm text-sm text-black/80 hover:text-primary shadow-sm hover:shadow-2xl transition-all delay-[30ms]"
    >
      <div className="flex items-center justify-center col-span-2">
        <img src={image} alt="" />
      </div>
      <div className="col-span-4">
        <h6 className="mb-1 text-sm">{categoryName}</h6>
        {tags?.map((tag, idx) => (
          <Link
            to={"/category/id"}
            key={idx}
            className="tori-link flex items-center gap-1 text-xs text-black/70"
          >
            <BiChevronRight /> {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
