import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import freeShp from "../../../assets/free-shipping.webp";
import lowP from "../../../assets/guarantee.webp";
import returnB from "../../../assets/return.webp";
const ProductFeature = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex lg:flex-row flex-col gap-3 justify-evenly border-b border-t py-4">
        <div className="flex items-center gap-1">
          <img src={freeShp} alt="" />
          <div>
            <p>Free Shipping</p>
            <p>Ship Today</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <img src={returnB} alt="" />
          <span>Easy Returns</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={lowP} alt="" />
          <span>
            Lowest Price <br /> Guarantee
          </span>
        </div>
      </div>
      <div>
        <h5 className="uppercase font-semibold">Share This Product</h5>
        <div className="flex gap-3 mt-3">
          <span className="social-icon twitter">
            <FaTwitter />
          </span>
          <span className="social-icon facebook">
            <FaFacebookF />
          </span>
          <span className="social-icon google">
            <TfiGoogle />
          </span>
          <span className="social-icon whatsApp">
            <BsWhatsapp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
