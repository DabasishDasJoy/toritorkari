import React from "react";
import { Link } from "react-router-dom";

const SideBarNav = () => {
  return (
    <div className="flex w-full text-black mt-11 text-center">
      <div className="sidebarMenu">
        <Link to={"/menu"}>Menu</Link>
      </div>
      <div className="sidebarMenu">
        <Link to={"/categories"}>Categories</Link>
      </div>
    </div>
  );
};

export default SideBarNav;
