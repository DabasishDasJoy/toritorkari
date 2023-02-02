import { ErrorMessage } from "@hookform/error-message";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import Required from "../../../components/Required/Required";
import ValidationError from "../../../components/ValidationError/ValidationError";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ChangePassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { changePassword } = useContext(AuthContext);

  const handleChangePassword = (d) => {
    changePassword(d.password)
      .then((res) => toast.success("Password Changed!"))
      .catch((err) => {
        console.error(err);
        return toast.error("Something Went Wrong!");
      });
  };
  return (
    <div className="bg-white w-full flex flex-col gap-5 p-5">
      <Helmet>
        <title>ToriTorkari Bazar - Dashboard</title>
        <meta name="description" content="User Dashboard" />
      </Helmet>
      <h4 className="text-base text-gray-700 font-semibold leading-none">
        Change Password
      </h4>

      <form
        onSubmit={handleSubmit(handleChangePassword)}
        className="lg:w-[80%] mx-auto border rounded-md p-5 flex flex-col gap-3 "
      >
        {/* Email */}
        <div>
          <label htmlFor="firstname" className="tori-label">
            New Password <Required></Required>
          </label>
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
        </div>

        <div>
          <button type="submit" className="tori-btn-secondary">
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
