import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "../../../../AxiosInstance/AxiosInstance";
import AddUserComment from "../../../../components/AddUserComment/AddUserComment";
import ConfirmationModal from "../../../../components/ConfirmationModal/ConfirmationModal";
import CustomerReviews from "../../../../components/CustomerReviews/CustomerReviews";
import EditCommentModal from "../../../../components/EditCommentModal/EditCommentModal";
import Loader from "../../../../components/Loader/Loader";
import ReviewCard from "../../../../components/ReviewCard/ReviewCard";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const Reviews = ({ selectedProduct, reviews, isLoading, refetch }) => {
  const { user } = useContext(AuthContext);
  const myReview = reviews.find((review) => review?.userEmail === user?.email);
  const [editReview, setEditReview] = useState(null);
  const [deleteReview, setDeleteReview] = useState(null);
  const [editReviewLoading, setEditReviewLoading] = useState(false);

  const handleClose = () => {
    setEditReview(null);
    setDeleteReview(null);
  };

  const handleEditReview = (data, updatedData) => {
    setEditReviewLoading(true);
    axios
      .patch(`/reviews/${data?._id}?email=${user?.email}`, updatedData)
      .then((res) => {
        if (res?.data?.modifiedCount || res?.data?.matchedCount) {
          toast.success("Comment Updated!");

          //   Close the modal
          handleClose();
          //   Refetch review to update
          refetch();
          setEditReviewLoading(false);
        } else {
          toast.error("Something went wrong. Please try again!");
          setEditReviewLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        setEditReviewLoading(false);
      });
    refetch();
    handleClose();
    setEditReviewLoading(false);
  };

  const handleDeleteReview = (data) => {
    axios
      .delete(`/reviews/${data?._id}?email=${user?.email}`)
      .then((res) => {
        if (res?.data?.deletedCount) {
          toast.success("Deleted Successfully!");
          handleClose();
          refetch();
        } else {
          handleClose();
          toast.error("Something Went Wrong!");
        }
      })
      .catch((err) => {
        toast.error(err?.message || "Something went wrong!");
        handleClose();
        refetch();
      });
    refetch();
  };

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
          <h2 className="text-base font-semibold mb-1 text-gray-700">
            My Review
          </h2>
          <ReviewCard review={myReview}></ReviewCard>
          <div className="flex gap-2 font-semibold">
            <label
              htmlFor="editComment-modal"
              onClick={() => setEditReview(myReview)}
              className="text-primary flex items-center gap-[2px] cursor-pointer hover:text-primary/70"
            >
              <FaRegEdit />
              Edit
            </label>
            <label
              htmlFor="confirmation-modal"
              onClick={() => setDeleteReview(myReview)}
              className="text-warning flex items-center gap-[2px] cursor-pointer hover:text-warning/70"
            >
              <RiDeleteBin6Line />
              Delete
            </label>
          </div>
        </div>
      ) : (
        <AddUserComment
          _id={selectedProduct?._id}
          refetch={refetch}
        ></AddUserComment>
      )}

      {editReview && (
        <EditCommentModal
          editReviewLoading={editReviewLoading}
          data={editReview}
          handleClose={handleClose}
          handleEdit={handleEditReview}
        ></EditCommentModal>
      )}
      {deleteReview && (
        <ConfirmationModal
          handleDelete={handleDeleteReview}
          handleClose={handleClose}
          data={deleteReview}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default Reviews;
