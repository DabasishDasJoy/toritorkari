import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="w-[5%] mx-auto">
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
            strokeWidth: "7px",
            strokeLinecap: "round",
          }}
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
    </div>
  );
};

export default Loader;
