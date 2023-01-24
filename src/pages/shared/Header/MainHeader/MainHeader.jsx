import React, { useContext } from "react";
import { AiOutlineCaretDown, AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";
import CategoriesDropdown from "../../../../components/CategoriesDropdown/CategoriesDropdown";
import Indicator from "../../../../components/Indicator/Indicator";
import Logo from "../../../../components/Logo/Logo";
import { CartContext } from "../../../../Contexts/CartProvider/CartProvider";
import MobileSideBarLayout from "../../../../layouts/MobileSideBarLayout/MobileSideBarLayout";
import Footer from "../../Footer/Footer";
import BottomHeader from "../BottomHeader/BottomHeader";
import TopHeader from "../TopHeader/TopHeader";

const MainHeader = ({ setLoginOrRegister }) => {
  const { numberOfCartItems, refetch } = useContext(CartContext);

  return (
    <div className="drawer">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <TopHeader setLoginOrRegister={setLoginOrRegister}></TopHeader>
        <div className="w-full navbar bg-primary lg:px-10 min-h-16 text-white justify-between">
          {/* menu icon */}
          <div className="flex-none lg:hidden ">
            <label
              htmlFor="mobile-drawer"
              className="cursor-pointer"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          {/* title */}
          <Link to={"/"} className="lg:block hidden ">
            <Logo></Logo>
          </Link>

          {/* Search Option */}
          <div className="flex-1 h-full">
            {/* <!-- Navbar menu content here --> */}
            <div className="flex mx-auto items-center tori-text-neutral text-sm rounded-full  lg:w-[60%] w-[90%] h-[70%] my-auto">
              {/* dropdown */}
              <div className="dropdown dropdown-bottom bg-gray-300 rounded-l-full  h-full ">
                <label
                  tabIndex={0}
                  className="lg:px-3 px-1 cursor-pointer w-full h-full text-center flex items-center gap-1 justify-center"
                >
                  All <AiOutlineCaretDown className="w-3 h-3" />
                </label>
                <CategoriesDropdown idText={"search"}></CategoriesDropdown>
              </div>

              {/* Text input */}
              <div className="flex flex-1 justify-between rounded-r-full overflow-hidden bg-white items-center h-full">
                <input
                  type="text"
                  placeholder="Search Products(e.g. Fish, Oil etc.)"
                  className="outline-none px-1 w-full"
                />
                <button className="lg:px-5 px-1 h-full bg-accent">
                  <AiOutlineSearch className="icon text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Navbar icons */}
          {/* wishlist */}
          <div className="flex gap-5 items-center">
            <div className="indicator">
              <FaRegHeart className="icon" />
              <Indicator></Indicator>
            </div>

            {/* cart */}
            <div className="indicator">
              <label htmlFor="cart-drawer" onClick={() => refetch()}>
                <BsCart3 className="icon" />
                <Indicator>{numberOfCartItems}</Indicator>
              </label>
            </div>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        <BottomHeader></BottomHeader>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
      <div className="drawer-side">
        <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
        <div className="menu w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <MobileSideBarLayout></MobileSideBarLayout>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
