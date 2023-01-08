import React from "react";

const SectionHeader = ({ children, subtitle }) => {
  return (
    <div className="text-center lg:w-[50%] mx-auto lg:py-5 pt-3 pb-2 px-2">
      <h1 className="text-black font-semibold lg:text-2xl text-lg lg:leading-10">
        {children}
      </h1>
      <p className="text-black/80 lg:text-sm text-xs">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
