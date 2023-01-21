import React from "react";
import image from "../../assets/guarantee.webp";

const ReviewCard = () => {
  return (
    <div className="text-gray-700">
      {/* Name, image, and star */}
      <div className="flex items-center gap-2 border-b-2 py-2">
        <div className="avatar">
          <div className="w-4 h-4 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={image} alt="" />
          </div>
        </div>
        <h4 className="font-semibold">Dabasish Das Joy</h4>

        <div className="rating ">
          <span
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-accent w-3 h-3"
            checked
          />
          <span
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-accent w-3 h-3"
            checked
          />
          <span
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-accent w-3 h-3"
            checked
          />
          <span
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-accent w-3 h-3"
            checked
          />
          <span
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-accent w-3 h-3"
            checked
          />
        </div>
        <span>(5)</span>
      </div>

      {/* Comment */}
      <div className="py-2">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quia,
          nulla facere praesentium optio saepe ducimus autem numquam reiciendis
          commodi harum facilis possimus odit alias asperiores repellat corporis
          culpa illum temporibus, blanditiis nisi. Id aliquam dolorem enim
          quibusdam pariatur alias dicta quae iure earum veritatis, sunt modi
          cum dolore voluptas?
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
