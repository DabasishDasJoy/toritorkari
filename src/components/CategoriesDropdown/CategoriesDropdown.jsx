import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "../../AxiosInstance/AxiosInstance";
import Loader from "../Loader/Loader";
import "./CategoriesDropdown.css";

const CategoriesDropdown = ({ idText }) => {
  const {
    isLoading,
    error,
    refetch,
    data: { data: categories } = [],
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return axios.get("/categories");
    },
  });

  return (
    <div
      tabIndex={0}
      className="dropdown-content shadow bg-base-100 rounded-md h-64 py-5 min-w-max overflow-y-auto w-64"
    >
      <div
        className={`accordion-wrapper flex ${
          isLoading && "h-full"
        } flex-col gap-5`}
      >
        {isLoading ? (
          <Loader></Loader>
        ) : (
          categories?.map((category, idx) => (
            <div key={category?._id} className="accordion px-5">
              <input
                className="drop-input"
                type="checkbox"
                name="radio-a"
                id={`${idText}${idx + 1}`}
              />

              <label
                className="accordion-label text-black text-sm gap-1 items-center"
                htmlFor={`${idText}${idx + 1}`}
              >
                <img src={category.image} alt="" className="w-4 h-4" />
                {category?.categoryName}
              </label>

              <div className="accordion-content flex flex-col">
                {category?.subCategories?.map((subCategory, idx) => (
                  <Link
                    to={`/category/${
                      category?._id
                    }?subcategory=${subCategory.toLowerCase()}`}
                    className="text-black/80 flex items-center gap-x-2 tori-link"
                    key={Math.random()}
                  >
                    <AiOutlineRight />
                    {subCategory}
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoriesDropdown;
