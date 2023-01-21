import React, { useContext, useRef } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddUserComment from "../../../../components/AddUserComment/AddUserComment";
import CustomerReviews from "../../../../components/CustomerReviews/CustomerReviews";
import EditCommentModal from "../../../../components/EditCommentModal/EditCommentModal";
import Loader from "../../../../components/Loader/Loader";
import ReviewCard from "../../../../components/ReviewCard/ReviewCard";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
const Reviews = ({ selectedProduct, reviews, isLoading, refetch }) => {
  const { user } = useContext(AuthContext);
  const myReview = reviews.find((review) => review?.userEmail === user?.email);
  const editCommentModal = useRef();

  return (
    <div className="py-5 lg:px-10 px-2 text-[16px] flex flex-col gap-5">
      {/* Review card */}
      {isLoading ? (
        <Loader></Loader>
      ) : reviews?.length ? (
        <>
          <CustomerReviews></CustomerReviews>
          <div className=" max-h-[500px] overflow-auto px-5 py-2">
            {reviews?.map((review) => (
              <ReviewCard key={review?._id} review={review}></ReviewCard>
            ))}
          </div>
        </>
      ) : (
        <span className="bg-[#FFEDD5] w-full text-center rounded-sm font-medium text-gray-700">
          Be the first!
        </span>
      )}

      {myReview ? (
        <div>
          <h2 className="text-base font-semibold mb-2 text-gray-700">
            Your Opinion
          </h2>
          <ReviewCard review={myReview}></ReviewCard>
          <div className="flex gap-2 font-semibold">
            <label
              htmlFor="editComment-modal"
              className="text-primary flex items-center gap-[2px] cursor-pointer hover:text-primary/70"
            >
              <FaRegEdit />
              Edit
            </label>
            <button className="text-warning flex items-center gap-[2px] cursor-pointer hover:text-warning/70">
              <RiDeleteBin6Line />
              Delete
            </button>
          </div>
        </div>
      ) : (
        <AddUserComment
          _id={selectedProduct?._id}
          refetch={refetch}
        ></AddUserComment>
      )}
      <EditCommentModal
        review={myReview}
        refetch={refetch}
        editCommentModal={editCommentModal}
      ></EditCommentModal>
    </div>
  );
};

export default Reviews;
