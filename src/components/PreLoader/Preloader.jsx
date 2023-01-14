import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <FaShoppingBag className="w-10 h-10 text-primary" />
      <div class="loader-line mt-2"></div>
    </div>
  );
};

export default Preloader;
