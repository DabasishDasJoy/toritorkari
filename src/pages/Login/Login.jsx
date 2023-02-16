import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import ValidationErrorMessage from "../../components/ValidationErrorMessage/ValidationErrorMessage";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useGetToken from "../../Hooks/useGetToken/useGetToken";

const Login = ({ setLoginOrRegister, setIsPasswordReset }) => {
  const { loginModal, signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [email, setEmail] = useState("");

  const [token] = useGetToken(email);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || location;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const handleLogin = (data) => {
    setLoginLoading(true);
    signIn(data.email, data.password)
      .then((res) => {
        setEmail(res?.user?.email);
        // toast
        toast.success(`Welcome ${res.user?.displayName}`);
        // Modal dissappear
        loginModal.current.checked = false;
        // navigate
        setLoginLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));

    setLoginLoading(false);
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
      <div className="col-span-4 py-10 lg:px-10 px-5 flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-2 w-full"
        >
          {/* Email */}
          <div>
            <div className="tori-input-wrapper">
              <MdEmail />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="tori-input border-none"
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email!",
                  },
                })}
              />
            </div>
            <ValidationErrorMessage
              name={"email"}
              errors={errors}
            ></ValidationErrorMessage>
          </div>

          {/* Password */}
          <div>
            <div className="tori-input-wrapper">
              <RiLockPasswordFill />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="tori-input border-none"
                {...register("password", {
                  required: "Password is required!",
                  validate: {
                    upperCase: (value) =>
                      /.*?[A-Z]/.test(value) ||
                      "Must have at least one uppercase character!",
                    lowerCase: (value) =>
                      /.*?[a-z]/.test(value) ||
                      "Must have at least one lowercase character!",
                    digit: (value) =>
                      /.*?[0-9]/.test(value) || "At least one digit!",
                    specialCharacter: (value) =>
                      /.*?[#?!@$%^&*-]/.test(value) ||
                      "Must have at least one special character!",
                    minlength: (value) =>
                      /.{8,}/.test(value) || "Must be 8 characters long!",
                  },
                })}
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
            <ValidationErrorMessage
              name={"password"}
              errors={errors}
            ></ValidationErrorMessage>
          </div>

          {/* Input End */}

          {/* Forgot Pass */}
          <div className="flex text-xs justify-between items-center">
            <label className="cursor-pointer flex items-center gap-1">
              <input
                type="checkbox"
                className="checkbox w-3 h-3 rounded-sm checkbox-primary"
              />
              <span className="text-primary">Remember me</span>
            </label>

            <button
              onClick={() => setIsPasswordReset(true)}
              className="hover text-primary hover:font-bold transition-all delay-75"
            >
              Forgot password?
            </button>
          </div>
          {/* End */}

          {/* Submit */}
          <button
            className="tori-btn-secondary mt-2 disabled:bg-primary/80"
            disabled={loginLoading}
          >
            {loginLoading ? <ButtonLoader></ButtonLoader> : "Sign In"}
          </button>

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
        <div className="divider mt-5 mb-2 after:bg-gray-200 before:bg-gray-200 after:h-[1px] before:h-[1px] text-black/60 text-xs">
          Or Login with Social Account
        </div>

        {/* Social Login */}
        <SocialLogin loginModal={loginModal}></SocialLogin>
      </div>
    </>
  );
};

export default Login;
