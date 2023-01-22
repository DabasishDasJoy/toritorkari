import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "../../AxiosInstance/AxiosInstance";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

const AddUserComment = ({ _id, refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const { user } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [addReviewLoading, setAddReviewLoading] = useState(false);

  const handleAddReview = (d) => {
    setAddReviewLoading(true);
    const data = {
      ...d,
      userName: user?.displayName,
      userEmail: user?.email,
      image: user?.photoURL,
      productId: _id,
      dateAdded: new Date(),
    };
    axios
      .post(`/reviews?email=${user?.email}`, data)
      .then((res) => {
        if (res?.data?.acknowledged) {
          toast.success("Than you for your valuable opinion");
          setAddReviewLoading(false);
          refetch();
        } else {
          toast.error("Something went wrong! Please try again");
          refetch();
          setAddReviewLoading(false);
        }
      })
      .catch((err) => {
        toast.error(err?.message || "Something Went Wrong");
      });

    setAddReviewLoading(false);
    refetch();
  };

  return (
    <div className="text-gray-700 flex flex-col border-t py-2">
      <h2 className="text-base font-semibold mb-2">Your Opinion Matters</h2>
      <form
        onSubmit={handleSubmit(handleAddReview)}
        className="flex flex-col gap-3 lg:w-[50%]"
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
              {addReviewLoading ? <ButtonLoader></ButtonLoader> : "Add Comment"}
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
