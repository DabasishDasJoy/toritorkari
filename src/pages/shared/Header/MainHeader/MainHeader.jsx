import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";
import Indicator from "../../../../components/Indicator/Indicator";
import Logo from "../../../../components/Logo/Logo";
import { CategoriesContext } from "../../../../Contexts/AuthProvider/CategoriesProvider/CategoriesProvider";
import MobileSideBarLayout from "../../../../layouts/MobileSideBarLayout/MobileSideBarLayout";
import Footer from "../../Footer/Footer";
import BottomHeader from "../BottomHeader/BottomHeader";
import TopHeader from "../TopHeader/TopHeader";

const MainHeader = ({ setLoginOrRegister }) => {
  // Fetch Categories
  const { categories, isLoading } = useContext(CategoriesContext);

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
              <div className="dropdown bg-gray-300 rounded-l-full  h-full ">
                <label
                  tabIndex={0}
                  className="px-5 w-full h-full text-center flex items-center justify-center"
                >
                  All
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content flex flex-col gap-1 p-5 shadow bg-base-100 rounded-md min-w-max h-52 overflow-y-auto divide-y-2"
                >
                  {categories?.map((category) => (
                    <li key={category._id}>{category.categoryName}</li>
                  ))}
                </ul>
              </div>
              {/* <div className="bg-gray-200 h-full border">
                <select className="outline-none bg-transparent text-center font-medium h-full cursor-pointer">
                  <option value="">All</option>
                  {categories?.map((category) => (
                    <option key={category._id} className="" value="">
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div> */}

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
          <div className="flex gap-5 items-center">
            <div className="indicator">
              <FaRegHeart className="icon" />
              <Indicator>10</Indicator>
            </div>

            <div className="indicator">
              <label htmlFor="cart-drawer">
                <BsCart3 className="icon" />
                <Indicator>8</Indicator>
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
