import React, { useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const SideMenu = ({ setLoginOrRegister }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col divide-y-2 overflow-auto h-full mt-20">
      {user ? (
        <Link to={"/user/dashboard"} className="p-2 flex items-center gap-1">
          <FaRegUser className="" />
          Dashboard
        </Link>
      ) : (
        <div className="p-2 flex  justify-around">
          <label
            onClick={() => setLoginOrRegister("login")}
            htmlFor="login-modal"
            className=""
          >
            Sign In
          </label>
          |
          <label
            onClick={() => setLoginOrRegister("register")}
            htmlFor="login-modal"
            className=""
          >
            Sign Up
          </label>
        </div>
      )}
      <Link className="p-2" to={"/contact"}>
        Contact Us
      </Link>
      <Link className="p-2" to={"/faq"}>
        FAQ
      </Link>
      <Link className="p-2" to={"/blog"}>
        Blog
      </Link>
      <Link to={"/offers"} className="p-2">
        Offers
      </Link>
      <Link to={"/todaysdeal"} className="p-2">
        Todays Deal
      </Link>
      <Link to={"/sell"} className="p-2">
        Sell
      </Link>
    </div>
  );
};

export default SideMenu;
