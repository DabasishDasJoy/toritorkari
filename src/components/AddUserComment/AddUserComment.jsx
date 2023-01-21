import React from "react";

const AddUserComment = () => {
  return (
    <div className="text-gray-700 flex flex-col">
      <h2 className="text-base font-semibold mb-2">Your Opinion Matters</h2>
      <form className="flex flex-col gap-3">
        <div className="rating">
          <span className="pr-2">Your Ratings:</span>
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 w-4 h-4 bg-accent"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 w-4 h-4 bg-accent"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 w-4 h-4 bg-accent"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 w-4 h-4 bg-accent"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 w-4 h-4 bg-accent"
          />
        </div>
        <textarea
          type="text"
          name=""
          id=""
          placeholder="What's on Your Mind?"
          className="border-2 rounded-sm w-full min-h-fit focus:outline-none px-2"
        />
        <div>
          <button className="tori-btn-secondary">Add Comment</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserComment;
