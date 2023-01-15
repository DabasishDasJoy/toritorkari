import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = ({ setLoginOrRegister }) => {
  const { loginModal } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* Title */}
      <div className="col-span-2 bg-primary text-white px-5 py-10">
        <h1 className="text-xl font-bold">Sign In</h1>
        <p className="text-xs">
          Get Access to you orders, wishlist, reccomendation
        </p>
      </div>

      {/* Form Div */}
      <div className="col-span-4 py-10 lg:px-7 px-5 flex flex-col  items-center justify-center">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-2 w-full"
        >
          {/* Email */}
          <div className="tori-input-wrapper">
            <MdEmail />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="tori-input border-none"
            />
          </div>

          {/* Password */}
          <div className="tori-input-wrapper">
            <RiLockPasswordFill />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="tori-input border-none"
            />
            {showPassword ? (
              <AiTwotoneEyeInvisible
                onClick={() => setShowPassword(false)}
                className="icon text-black/60"
              />
            ) : (
              <AiFillEye
                onClick={() => setShowPassword(true)}
                className="icon text-black/60"
              />
            )}
          </div>

          {/* Input End */}

          {/* Forgot Pass */}
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
          {/* End */}

          {/* Submit */}
          <button className="tori-btn-secondary">Sign In</button>

          <p className="text-xs text-black/50">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setLoginOrRegister("register");
              }}
              className="text hover:font-bold text-primary cursor-pointer transition-all delay-75"
            >
              Sign Up
            </span>
          </p>
        </form>

        {/* Form end */}

        {/* Divider */}
        <div className="divider mt-5 mb-2 after:bg-gray-100 before:bg-gray-100 after:h-[1px] before:h-[1px] text-black/60 text-xs">
          Or Login with Social Account
        </div>
        {/* Social Login */}
        <SocialLogin loginModal={loginModal}></SocialLogin>
      </div>
    </>
  );
};

export default Login;
