import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiStarHalfFill } from "react-icons/ri";

const RatingsStars = ({ ratings }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[...Array(parseInt(ratings)).keys()].map((idx) => (
          //   <span
          //     key={idx}
          //     name="rating-2"
          //     className="mask mask-star-2 bg-accent w-3 h-3"
          //   />
          <AiFillStar key={Math.random()} className="w-3 h-3 text-accent" />
        ))}
        {ratings > parseInt(ratings) && (
          <RiStarHalfFill className="w-3 h-3 text-accent" />
        )}
        {[...Array(Math.floor(5 - ratings)).keys()].map((idx) => (
          <AiOutlineStar key={Math.random()} className="w-3 h-3 text-accent" />
        ))}
      </div>

      <span className="text-xs leading-none text-gray-400">({ratings})</span>
    </div>
  );
};

export default RatingsStars;
