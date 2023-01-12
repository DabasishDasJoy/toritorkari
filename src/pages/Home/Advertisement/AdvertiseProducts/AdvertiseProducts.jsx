import React from "react";
import { Autoplay } from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import AdvertiseProduct from "../AdvertiseProduct/AdvertiseProduct";

// Import Swiper styles

// import required modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const AdvertiseProducts = () => {
  return (
    <div className="swiper-container lg:col-span-3 col-span-1">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        spaceBetween={5}
        slidesPerView={1}
        autoplay
        className="categoriesSwipper"
      >
        <SwiperSlide>
          <AdvertiseProduct></AdvertiseProduct>
        </SwiperSlide>
        <SwiperSlide>
          <AdvertiseProduct></AdvertiseProduct>
        </SwiperSlide>
        <SwiperSlide>
          <AdvertiseProduct></AdvertiseProduct>
        </SwiperSlide>
        <SwiperSlide>
          <AdvertiseProduct></AdvertiseProduct>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdvertiseProducts;
