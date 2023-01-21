import React from "react";
import AddUserComment from "../../../../components/AddUserComment/AddUserComment";
import CustomerReviews from "../../../../components/CustomerReviews/CustomerReviews";
import ReviewCard from "../../../../components/ReviewCard/ReviewCard";

const Reviews = ({ selectedProduct: { _id } }) => {
  return (
    <div className="py-5 lg:px-10 px-2 text-[16px] flex flex-col gap-5">
      {/* Review card */}
      <CustomerReviews></CustomerReviews>
      <AddUserComment></AddUserComment>
      <div>
        <ReviewCard></ReviewCard>
      </div>
    </div>
  );
};

export default Reviews;
