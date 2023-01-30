import React, { useState } from "react";
import MobileSideBarHeader from "../../pages/SideBar/MobileSideBarHeader/MobileSideBarHeader";
import SideBarCategories from "../../pages/SideBar/SideBarCategories/SideBarCategories";
import SideBarNav from "../../pages/SideBar/SideBarNav/SideBarNav";
import SideMenu from "../../pages/SideBar/SideMenu/SideMenu";

const MobileSideBarLayout = ({ setLoginOrRegister }) => {
  const [isMenu, setIsMenu] = useState(true);
  return (
    <>
      <MobileSideBarHeader></MobileSideBarHeader>
      <SideBarNav setIsMenu={setIsMenu}></SideBarNav>
      {isMenu ? (
        <SideMenu setLoginOrRegister={setLoginOrRegister}></SideMenu>
      ) : (
        <SideBarCategories></SideBarCategories>
      )}
    </>
  );
};

export default MobileSideBarLayout;
