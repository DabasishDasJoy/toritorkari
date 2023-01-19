import React from "react";

const StatusTag = ({ children, color }) => {
  return (
    <span
      className={`bg-${color}/10 text-${color} text-xs rounded-full px-2 py-[1px] font-medium`}
    >
      {children}
    </span>
  );
};

export default StatusTag;
