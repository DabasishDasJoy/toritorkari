import { ErrorMessage } from "@hookform/error-message";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../AxiosInstance/AxiosInstance";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import ValidationError from "../../components/ValidationError/ValidationError";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useGetToken from "../../Hooks/useGetToken/useGetToken";

const Register = ({ setLoginOrRegister }) => {
  const { loginModal, signUp, updateUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
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

  const handleRegister = (data) => {
    setRegisterLoading(true);
    setEmail("");
    // SignUp Firebase
    signUp(data.email, data.password)
      .then((res) => {
        // Update user
        updateUserProfile(data);
      })
      .catch((err) => {
        setRegisterLoading(false);
        return toast.error(err.message);
      });
  };

  const updateUserProfile = (data) => {
    updateUser({ displayName: data.userName })
      .then((res) => {
        // Save user info in DB
        saveUserToDb(data);
      })
      .catch((err) => {
        setRegisterLoading(false);
        return toast.error(err.message);
      });
  };

  const saveUserToDb = (data) => {
    axios
      .post("/users", {
        name: data.userName,
        email: data.email,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          // Get JWT token here
          setEmail(data.email);
          toast.success(`Welcome ${data.userName}`);
          loginModal.current.checked = false;
          navigate(from, { replace: true });
          setRegisterLoading(false);
        } else {
        }
      })
      .catch((err) => {
        setRegisterLoading(false);
        console.error(err);
      });
  };

  return (
    <>
      {/* Title */}
      <div className="col-span-2 bg-primary text-white px-5 py-10">
        <h1 className="text-xl font-bold">Sign Up</h1>
        <p className="text-xs">
          Get Access to you orders, wishlist, reccomendation
        </p>
      </div>
      {/* Title End */}

      {/* Form div */}
      <div className="col-span-4 py-10 lg:px-10 px-5 flex flex-col  items-center justify-center">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex flex-col gap-2 w-full"
        >
          {/* User Name */}
          <div>
            <div className="tori-input-wrapper">
              <FaUserTie />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="tori-input border-none"
                {...register("userName", {
                  required: "Username is required!",
                })}
              />
            </div>
            <ErrorMessage
              errors={errors}
              name="userName"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ValidationError
                        key={type}
                        message={message}
                      ></ValidationError>
                    ))
                  : null;
              }}
            />
          </div>

          {/* Email */}
          <div>
            <div className="tori-input-wrapper">
              <MdEmail />
              <input
                type="email"
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
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ValidationError
                        key={type}
                        message={message}
                      ></ValidationError>
                    ))
                  : null;
              }}
            />
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
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ValidationError
                        key={type}
                        message={message}
                      ></ValidationError>
                    ))
                  : null;
              }}
            />
          </div>

          {/* Input End */}

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
          </div>

          {/* SUbmit */}
          <button
            className={`tori-btn-secondary mt-2 disabled:bg-primary/80`}
            disabled={registerLoading}
          >
            {registerLoading ? <ButtonLoader /> : "Sign Up"}
          </button>

          {/* Navigator */}
          <p className="text-xs text-black/50">
            Already have an account?{" "}
            <span
              onClick={() => setLoginOrRegister("login")}
              className="text hover:font-bold text-primary cursor-pointer transition-all delay-75"
            >
              Sign In
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

export default Register;
