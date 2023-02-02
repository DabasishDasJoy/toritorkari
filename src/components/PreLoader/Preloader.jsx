import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <FaShoppingBag className="w-8 h-8 text-primary" />
      <div className="loader-line mt-2"></div>
    </div>
  );
};

export default Preloader;
