import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ProductDetailsCard.css";

import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineHeart } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdOutlineMore } from "react-icons/md";
import { FreeMode, Thumbs } from "swiper";
import { CartContext } from "../../Contexts/CartProvider/CartProvider";
import useGetQuantity from "../../Hooks/useGetQuantity/useGetQuantity";
import RatingsStars from "../RatingsStars/RatingsStars";

const ProductDetailsCard = ({
  children,
  display,
  selectedProduct,
  selectedProduct: { image, tags, name, price, status, desc, _id, net },
}) => {
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const location = useLocation();
  const [quantity] = useGetQuantity(_id);
  const { reduceQuantityFromCart, addToCart } = useContext(CartContext);

  const handleReduceQuantity = (id, product) => {
    reduceQuantityFromCart(id);
    if (quantity === 1) {
      toast.success(`${product} Removed from cart`);
    }
  };

  // Add to cart
  const handleAddtoCart = (id, product) => {
    addToCart(id);
    if (quantity === 0) {
      toast.success(`${product} Added to cart`);
    }
  };

  return (
    <div className="flex lg:gap-5 text-[16px] text-gray-700 lg:flex-nowrap flex-wrap">
      {/* Image */}
      <div className="lg:w-[30%] w-full">
        <img
          src={image}
          alt=""
          className="w-full rounded-sm lg:hidden block mx-auto"
        />
        <Swiper
          spaceBetween={10}
          loop={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 lg:mb-5 px-1 md:block hidden"
        >
          <SwiperSlide>
            <div className="border rounded-sm overflow-hidden">
              <img src={image} alt="" className=" w-full " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-sm overflow-hidden">
              <img src={image} alt="" className="h-full w-full " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-sm overflow-hidden">
              <img src={image} alt="" className="h-full w-full " />
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          navigation={{
            prevEl: ".prevThumb",
            nextEl: ".nextThumb",
          }}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          loop={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper p-2 bg-secondary relative md:block hidden"
        >
          <SwiperSlide>
            <img src={image} alt="" className="h-full w-full cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" className="h-full w-full cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="" className="h-full w-full cursor-pointer" />
          </SwiperSlide>

          <button className="absolute prevThumb bottom-[26%] bg-primary w-6 rounded-r-md my-auto flex justify-center items-center h-7 z-10 lg:left-0 left-2">
            <BiChevronLeft className="w-6 h-6 text-white font-extrabold" />
          </button>
          <button className="absolute nextThumb bottom-[26%] bg-primary w-6 rounded-l-md my-auto flex justify-center items-center h-7 z-10 lg:right-0 right-2">
            <BiChevronRight className="w-6 h-6 text-white font-extrabold" />
          </button>
        </Swiper>
      </div>

      {/* Intro */}
      <div className="border flex bg-white flex-col gap-2 rounded-sm lg:w-[70%] p-5">
        {/* tags */}
        <div className="flex gap-2">
          {tags?.map((tag, idx) => (
            <Link
              className="border rounded-full px-2 bg-primary/20"
              key={Math.random()}
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Name */}
        <h5 className="text-xl text-gray-700">{name}</h5>

        {selectedProduct?.ratings > 0 ? (
          <RatingsStars ratings={selectedProduct?.ratings}></RatingsStars>
        ) : (
          <span className="text-gray-400 text-xs leading-none">
            Not Reviewed Yet!
          </span>
        )}

        {/* Pice */}
        <h6 className="text-2xl text-primary font-bold">
          $
          {selectedProduct?.discount
            ? ((selectedProduct.discount / 100) * price).toFixed(2)
            : price}{" "}
          {selectedProduct?.discount && (
            <>
              <span className="line-through text-lg text-black/50">
                ${price}{" "}
              </span>
              <span className="text-accent ml-3">
                Save {selectedProduct?.discount}%
              </span>
            </>
          )}
        </h6>

        {/* Tax & Brand */}
        <div className="flex flex-col gap-1">
          <p>
            Net Weight: <span className="text-primary/80">{net}</span>
          </p>
          <p>
            Product Code: <span className="text-primary/80">abc1234</span>
          </p>
          <p>
            Availability:{" "}
            <span
              className={`${
                status?.toLowerCase() === "in stock"
                  ? "text-primary/80"
                  : "text-warning/80"
              }`}
            >
              {status}
            </span>
          </p>
        </div>

        {/* Description */}
        <div className="border-t border-b py-5 my-2">
          <p>{desc}</p>
        </div>

        {/* Button */}
        {status?.toLowerCase() === "in stock" && (
          <div className="flex lg:justify-start justify-center items-center lg:gap-5 my-3 gap-2 lg:flex-nowrap flex-wrap">
            {quantity ? (
              <div className="flex hover:bg-white hover:text-primary hover:border-primary border border-white bg-primary text-center rounded-md text-sm text-white  font-semibold items-center">
                <button
                  className="px-5 py-[8px]"
                  onClick={() => handleReduceQuantity(_id, name)}
                >
                  {" "}
                  -{" "}
                </button>
                <span className=" text-sm">{quantity}</span>
                <button
                  className="px-5 py-1"
                  onClick={() => handleAddtoCart(_id, name)}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            ) : (
              <div className="lg:w-[30%] w-[70%]">
                <button
                  onClick={() => handleAddtoCart(_id, name)}
                  className="tori-btn-secondary w-full"
                >
                  + Add to Cart
                </button>
              </div>
            )}
            <div className="">
              <button
                data-tip="Add to Wishlist"
                className="tooltip tooltip-secondary bg-gray-400 text-white hover:bg-secondary hover:text-black p-[8px] rounded-md"
              >
                <AiOutlineHeart className="icon" />
              </button>
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex justify-center gap-5">
          <div className={`${display}`}>
            <label
              onClick={() =>
                navigate(`/product/${_id}`, {
                  state: { Navigatedfrom: location },
                })
              }
              htmlFor="product-modal"
              className={"text-sm text-accent tori-link"}
            >
              More Info <MdOutlineMore />
            </label>
          </div>
          {children}
        </div>
      </div>

      {/* *************** */}
    </div>
  );
};

export default ProductDetailsCard;
