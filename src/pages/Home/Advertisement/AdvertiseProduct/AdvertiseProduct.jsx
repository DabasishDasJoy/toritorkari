import React from "react";

import { Autoplay } from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import required modules
SwiperCore.use([Pagination, Navigation, Autoplay]);
const AdvertiseProduct = () => {
  return (
    <div className="swiper-container col-span-3">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={5}
        slidesPerView={1}
        autoplay
        className="categoriesSwipper"
      >
        <SwiperSlide>
          <img
            src={
              "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
            }
            alt=""
            className="w-full h-[346px] rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
            }
            alt=""
            className="w-full h-[346px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
            }
            alt=""
            className="w-full h-20"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdvertiseProduct;
