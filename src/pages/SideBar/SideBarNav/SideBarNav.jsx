import React from "react";

const SideBarNav = ({ setIsMenu }) => {
  return (
    <div className="flex w-full fixed text-black mt-11 text-center">
      <button onClick={() => setIsMenu(true)} className="sidebarMenu ">
        <span>Menu</span>
      </button>
      <button onClick={() => setIsMenu(false)} className="sidebarMenu">
        <span>Categories</span>
      </button>
    </div>
  );
};

export default SideBarNav;
