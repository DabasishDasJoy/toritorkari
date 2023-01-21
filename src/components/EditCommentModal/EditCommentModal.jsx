import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "../../AxiosInstance/AxiosInstance";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

const EditCommentModal = ({ editCommentModal, review, refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const [editReviewLoading, setEditReviewLoading] = useState(false);
  const { user } = useContext(AuthContext);

  // handler
  const handleEditReview = (data) => {
    setEditReviewLoading(true);
    axios
      .patch(`/reviews/${review?._id}?email=${user?.email}`, data)
      .then((res) => {
        if (res?.data?.modifiedCount) {
          toast.success("Comment Updated!");
          setEditReviewLoading(false);

          //   Close the modal
          editCommentModal.current.checked = false;
          //   Refetch review to update
          refetch();
        } else {
          toast.error("Something went wrong. Please try again!");
          setEditReviewLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
        setEditReviewLoading(false);
      });
    setEditReviewLoading(false);
  };

  return (
    <div className="">
      <input
        ref={editCommentModal}
        name="editCommentModal"
        type="checkbox"
        id="editComment-modal"
        className="modal-toggle"
      />

      <div className="modal bg-black/80">
        <div className="modal-box relative rounded-sm ">
          <label
            htmlFor="editComment-modal"
            className="absolute right-2 text-gray-700 hover:text-primary cursor-pointer font-semibold top-1"
          >
            ✕
          </label>
          <h2 className="text-base font-semibold mb-2 text-center">
            Edit Your Comment
          </h2>
          <form
            onSubmit={handleSubmit(handleEditReview)}
            className="flex flex-col gap-3 "
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
              defaultValue={review?.review}
              placeholder="What's on Your Mind?"
              className="border-2 rounded-sm w-full min-h-fit focus:outline-none px-2"
              required
              {...register("review")}
            />
            <div className="flex items-center justify-center gap-5">
              <button className="tori-btn-secondary" type="submit">
                {editReviewLoading ? (
                  <ButtonLoader></ButtonLoader>
                ) : (
                  "Edit Comment"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCommentModal;
