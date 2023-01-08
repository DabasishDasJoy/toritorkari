import React from "react";

const SectionHeader = ({ children, subtitle }) => {
  return (
    <div className="text-center lg:py-5 pt-3 pb-2 px-2">
      <h1 className="text-black  font-semibold text-2xl leading-10">
        {children}
      </h1>
      <p className="text-black/80">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
