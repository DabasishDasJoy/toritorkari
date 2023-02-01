import React from "react";

const Indicator = ({ children }) => {
  return (
    <span className="badge badge-sm text-white indicator-item badge-warning p-1">
      {children ? children : 0}
    </span>
  );
};

export default Indicator;
