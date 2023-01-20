import React from "react";

const StatusTag = ({ children, color }) => {
  return (
    <span
      className={` ${
        color ? "bg-primary/10 text-primary" : "bg-warning/10 text-warning"
      }  text-xs rounded-full px-2 py-[1px] font-medium`}
    >
      {children}
    </span>
  );
};

export default StatusTag;
