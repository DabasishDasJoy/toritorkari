import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import TopHeader from "../TopHeader/TopHeader";

const Header = () => {
  return (
    <div>
      {/* Upper section */}
      <TopHeader></TopHeader>
      {/* uppder section end */}
      <MainHeader></MainHeader>
    </div>
  );
};

export default Header;
