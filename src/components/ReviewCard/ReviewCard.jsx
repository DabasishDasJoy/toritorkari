import moment from "moment";
import React from "react";

const ReviewCard = ({
  review: { image, userName, ratings, review, dateAdded },
}) => {
  return (
    <div className="text-gray-700">
      {/* Name, image, and star */}
      <div className="flex items-center gap-2 border-b-2 py-2">
        <div className="avatar">
          <div className="w-4 h-4 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={image} alt="" />
          </div>
        </div>
        <h4 className="font-semibold">{userName}</h4>

        <div className="rating ">
          {[...Array(parseInt(ratings)).keys()].map((idx) => (
            <span
              key={Math.random()}
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-accent w-3 h-3"
            />
          ))}
        </div>
        <span>({ratings})</span>
        <span className="italic text-xs flex-1 text-right leading-none">
          {moment(dateAdded).fromNow()}
        </span>
      </div>

      {/* Comment */}
      <div className="py-2">
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
