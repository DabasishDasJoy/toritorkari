import React, { useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
const TopHeader = ({ setLoginOrRegister }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="justify-between font-medium text-xs leading-5 tori-text-neutral bg-secondary component lg:flex hidden">
      {/* left  */}
      <div>
        <p>
          <FiPhoneCall className="inline mr-1" /> We are available 24/7, Need
          Help? Call Us:{" "}
          <span className="text-primary font-bold">+880 1876 097120</span>
        </p>
      </div>

      {/* right */}
      <div className="flex justify-around gap-3">
        <Link className="tori-link" to={"/contact"}>
          Contact Us
        </Link>
        |
        <Link className="tori-link" to={"/faq"}>
          FAQ
        </Link>
        |
        <Link className="tori-link" to={"/blog"}>
          Blog
        </Link>
        |{" "}
        {user && user.uid ? (
          <Link
            to={"/user/dashboard"}
            className="tori-link flex gap-1 items-center"
          >
            <FaRegUser className="" />
            Account
          </Link>
        ) : (
          <div className="dropdown dropdown-end dropdown-bottom dropdown-hover">
            <label
              tabIndex={0}
              className="flex tori-link cursor-pointer  items-center gap-1"
            >
              <FaRegUser className="" /> Account
            </label>
            <div
              tabIndex={0}
              className="dropdown-content px-2 py-3 shadow bg-base-100 rounded-sm flex flex-col gap-1 w-40 h-20 justify-center text-center"
            >
              <label
                onClick={() => setLoginOrRegister("login")}
                htmlFor="login-modal"
                className="bg-accent cursor-pointer text-white rounded-sm hover:bg-primary py-1 font-bold w-full"
              >
                Sign In
              </label>
              <p>
                New here?{" "}
                <label
                  onClick={() => setLoginOrRegister("register")}
                  htmlFor="login-modal"
                  className="text-primary link hover:font-semibold"
                >
                  Sign Up
                </label>
              </p>
            </div>
          </div>
          // <label
          //   tabIndex={0}
          //   className="flex items-center gap-1 cursor-pointer dropdown dropdown-hover"
          // >
          //   <FaRegUser className="" />
          //   Account
          //   <div
          //     tabIndex={0}
          //     className="dropdown-content  bg-secondary shadow text-center p-2 rounded-sm top-5 text-xs right-0 w-44 "
          //   >
          //     <label
          //       htmlFor="login-modal"
          //       className="bg-accent m-2 py-1 w-full mx-auto hover:bg-primary transition-all delay-75 text-base text-white rounded-md"
          //     >
          //       Sign In
          //     </label>
          //   </div>
          // </label>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
