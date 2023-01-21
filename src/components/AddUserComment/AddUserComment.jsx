import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const AddUserComment = ({ _id }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const { user } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);

  const handleAddReview = (d) => {
    const data = {
      ...d,
      userName: user?.displayName,
      image: user?.photoURL,
      productId: _id,
    };
    console.log(data);
  };

  return (
    <div className="text-gray-700 flex flex-col">
      <h2 className="text-base font-semibold mb-2">Your Opinion Matters</h2>
      <form
        onSubmit={handleSubmit(handleAddReview)}
        className="flex flex-col gap-3"
      >
        <div className="rating">
          <span className="pr-2">Your Ratings:</span>
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 w-4 h-4 bg-accent"
            value={1}
            defaultChecked
            required
            {...register("ratings")}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 w-4 h-4 bg-accent"
            value={2}
            required
            {...register("ratings")}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 w-4 h-4 bg-accent"
            value={3}
            required
            {...register("ratings")}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 w-4 h-4 bg-accent"
            value={4}
            required
            {...register("ratings")}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 w-4 h-4 bg-accent"
            value={5}
            required
            {...register("ratings")}
          />
        </div>
        <textarea
          type="text"
          name="review"
          id=""
          placeholder="What's on Your Mind?"
          className="border-2 rounded-sm w-full min-h-fit focus:outline-none px-2"
          required
          {...register("review")}
        />
        <div className="flex items-center gap-5">
          {user && user?.uid ? (
            <button className="tori-btn-secondary" type="submit">
              Add Comment
            </button>
          ) : (
            <span
              className="tori-btn-secondary cursor-pointer"
              onClick={() => setShowLogin(true)}
            >
              Add Comment
            </span>
          )}
          {showLogin && !user && (
            <span className="text-gray-700 rounded-sm bg-[#FFEDD5] p-2">
              Ops! You're not logged in. Please{" "}
              <label
                htmlFor="login-modal"
                className="text-primary cursor-pointer font-semibold"
              >
                Login
              </label>{" "}
              first.
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddUserComment;
