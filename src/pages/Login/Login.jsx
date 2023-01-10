import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const loginModal = useRef();

  return (
    <div className="">
      <input
        ref={loginModal}
        name="loginModal"
        type="checkbox"
        id="login-modal"
        className="modal-toggle"
      />

      <div className="modal bg-black/80">
        <div className="modal-box lg:w-6/12 w-11/12 max-w-5xl p-0 relative rounded-md grid lg:grid-cols-6 grid-cols-1">
          <label
            htmlFor="login-modal"
            className="absolute right-2 text-black hover:text-primary cursor-pointer font-semibold top-1"
          >
            ✕
          </label>

          <div className="col-span-2 bg-primary text-white px-5 py-10">
            <h1 className="text-xl font-bold">Login</h1>
            <p className="text-xs">
              Get Access to you orders, wishlist, reccomendation
            </p>
          </div>

          {/* Form */}
          <div className="col-span-4 py-10 lg:px-7 px-5 flex flex-col  items-center justify-center">
            <form className="flex flex-col gap-2 w-full">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="tori-input"
              />
              <input
                type="text"
                placeholder="Enter your password"
                className="tori-input"
              />
              <div className="flex justify-between items-center">
                <label className="cursor-pointer flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="checkbox w-3 h-3 rounded-sm checkbox-primary"
                  />
                  <span className="label-text-alt text-primary text-xs">
                    Remember me
                  </span>
                </label>
                <label className="">
                  <Link
                    href="#"
                    className="label-text-alt hover text-primary hover:font-bold transition-all delay-75"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <button className="tori-btn-secondary">Login</button>
              <p className="text-xs text-black/50">
                Don't have an account?{" "}
                <Link className="text hover:font-bold text-primary transition-all delay-75">
                  Sign Up
                </Link>
              </p>
            </form>
            <div className="divider my-5 m-0 after:bg-gray-100 before:bg-gray-100 after:h-[1px] before:h-[1px] text-black/60 text-xs">
              Or Login with Social Account
            </div>
            {/* Social Login */}
            <SocialLogin loginModal={loginModal}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
