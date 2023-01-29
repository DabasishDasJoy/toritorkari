import { ErrorMessage } from "@hookform/error-message";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { MdEmail } from "react-icons/md";
import ValidationError from "../../components/ValidationError/ValidationError";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const ResetPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const { resetPassword, loginModal } = useContext(AuthContext);

  const handleResetPassword = (d) => {
    resetPassword(d.email)
      .then(() => {
        toast.success("Verification Email Sent!");
        loginModal.current.checked = false;
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <div className="col-span-2 bg-primary text-white px-5 py-10">
        <h1 className="text-xl font-bold">Reset Password</h1>
        <p className="text-xs">
          Enter your email and send a verification email to reset.
        </p>
      </div>

      <div className="col-span-4 py-10 lg:px-10 px-5 flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(handleResetPassword)}
          className="flex flex-col gap-2 w-full"
        >
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

          <button className="tori-btn-secondary mt-2 disabled:bg-primary/80">
            Send Verification Email
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
