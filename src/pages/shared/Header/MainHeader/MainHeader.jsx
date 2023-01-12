import React, { useContext } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Indicator from "../../../../components/Indicator/Indicator";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import MobileSideBarLayout from "../../../../layouts/MobileSideBarLayout/MobileSideBarLayout";
import Footer from "../../Footer/Footer";
import BottomHeader from "../BottomHeader/BottomHeader";
import TopHeader from "../TopHeader/TopHeader";
const MainHeader = () => {
  const { user, loading } = useContext(AuthContext);

  return (
    <div className="drawer">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <TopHeader></TopHeader>
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
          <Link to={"/"} className="lg:block hidden">
            Toritorkari
          </Link>

          {/* Search Option */}
          <div className="flex-1">
            {/* <!-- Navbar menu content here --> */}
            <div className="flex items-center tori-text-neutral rounded-md overflow-hidden lg:w-[80%] w-[90%] mx-auto">
              <div className="bg-gray-200 py-1">
                <select
                  name=""
                  id=""
                  className="outline-none bg-transparent text-center text-sm font-medium"
                >
                  <option selected value="">
                    All
                  </option>
                  <option value="">fish</option>
                  <option value="">fish</option>
                  <option value="">fishery</option>
                  <option value="">fish</option>
                  <option value="">fish</option>
                </select>
              </div>

              <div className="flex flex-1 py-1 justify-between bg-white items-center">
                <input
                  type="text"
                  placeholder="Search Products(e.g. Fist, Oil etc.)"
                  className="outline-none px-1 w-full"
                />
                <button className="px-1">
                  <AiOutlineSearch className="icon" />
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
                <AiOutlineShoppingCart className="icon" />
                <Indicator>8</Indicator>
              </label>
            </div>

            {user && user?.uid ? (
              <Link
                to={"/user/dashboard"}
                className="border-2 w-6 h-6 rounded-full overflow-hidden  hidden lg:flex justify-center items-center font-bold"
              >
                {user.displayName[0]}
              </Link>
            ) : (
              <label htmlFor="login-modal" className="lg:block hidden">
                <FaRegUser className="icon" />
              </label>
            )}
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
