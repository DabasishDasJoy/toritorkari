import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Autoplay } from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "../../../AxiosInstance/AxiosInstance";
import CategoryCardMinified from "../../../components/CategoryCardMinified/CategoryCardMinified";
import Loader from "../../../components/Loader/Loader";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Categories = () => {
  // Fetch Categories
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
    <div className="swiper-container sub-section relative lg:col-span-3 col-span-1">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          300: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 10,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 11,
            spaceBetween: 5,
          },
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        loop={true}
        className="categoriesSwipper"
      >
        {isLoading ? (
          <Loader></Loader>
        ) : (
          categories?.map((category) => (
            <SwiperSlide key={category._id}>
              <CategoryCardMinified category={category}></CategoryCardMinified>
            </SwiperSlide>
          ))
        )}
      </Swiper>

      <button className="absolute top-0 prev bottom-0 bg-primary w-6 rounded-r-md my-auto flex justify-center items-center h-7 z-10 lg:left-10 left-2">
        <BiChevronLeft className="w-6 h-6 text-white font-extrabold" />
      </button>
      <button className="absolute top-0 next bottom-0 bg-primary w-6 rounded-l-md my-auto flex justify-center items-center h-7 z-10 lg:right-10 right-2">
        <BiChevronRight className="w-6 h-6 text-white font-extrabold" />
      </button>
    </div>
  );
};

export default Categories;
