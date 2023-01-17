import React from "react";
import { SiShopify } from "react-icons/si";
const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <SiShopify className="w-10 h-10" />
      <div className="flex-col items-start flex ">
        <span className="text-xl leading-none font-bold">ToriTorkari</span>
        <small className="text-xs leading-none">Find Your Green Here</small>
      </div>
    </div>
  );
};

export default Logo;
