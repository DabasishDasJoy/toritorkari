import React from "react";

const Description = ({ desc }) => {
  return (
    <div className="text-gray-700 py-5 lg:px-10 px-2 text-[16px]">
      <p>{desc}</p>
    </div>
  );
};

export default Description;
