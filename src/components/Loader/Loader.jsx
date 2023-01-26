import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="w-16 flex h-full justify-center items-center mx-auto my-auto relative col-span-full">
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="1.5"
              floodColor="#10B981"
            />
          </filter>
        </defs>
        <circle
          id="spinner"
          style={{
            fill: "transparent",
            stroke: "#10B981",
            strokeWidth: "3px",
            strokeLinecap: "round",
          }}
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
      <div className="absolute inset-0 flex justify-center items-center">
        <FaShoppingBag className="w-4 h-4 text-primary " />
      </div>
    </div>
  );
};

export default Loader;
