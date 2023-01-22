import React from "react";
import { useForm } from "react-hook-form";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

const EditCommentModal = ({
  data,
  handleClose,
  handleEdit,
  editReviewLoading,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  // handler
  const handleEditReview = (updatedData) => {
    handleEdit(data, updatedData);
  };

  return (
    <div className="absolute">
      <input
        name="editCommentModal"
        type="checkbox"
        id="editComment-modal"
        className="modal-toggle"
      />

      <div className="modal bg-black/80">
        <div className="modal-box relative rounded-sm ">
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
                defaultChecked={data?.ratings === "1"}
                required
                {...register("ratings")}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-4 h-4 bg-accent"
                value={2}
                defaultChecked={data?.ratings === "2"}
                required
                {...register("ratings")}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-4 h-4 bg-accent"
                value={3}
                required
                defaultChecked={data?.ratings === "3"}
                {...register("ratings")}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-4 h-4 bg-accent"
                value={4}
                required
                defaultChecked={data?.ratings === "4"}
                {...register("ratings")}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 w-4 h-4 bg-accent"
                value={5}
                defaultChecked={data?.ratings === "5"}
                required
                {...register("ratings")}
              />
              <span className="ml-2">({data?.ratings})</span>
            </div>
            <textarea
              type="text"
              name="review"
              id=""
              defaultValue={data?.review}
              placeholder={"What's on your mind?"}
              className="border-2 rounded-sm w-full min-h-fit focus:outline-none px-2"
              required
              {...register("review")}
            />
            <div className="flex items-center justify-center gap-5">
              <button className="tori-btn-secondary" type="submit">
                {editReviewLoading ? <ButtonLoader></ButtonLoader> : "Save"}
              </button>
              <label
                htmlFor="editComment-modal"
                onClick={() => handleClose()}
                className="tori-btn-warning"
              >
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCommentModal;
