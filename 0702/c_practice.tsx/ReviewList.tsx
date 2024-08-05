import React from "react";
import { ReviewType } from "./Review";
import ReviewItem from "./ReviewItem";

interface ReviewListProps {
  reviews: ReviewType[];
  updateReview: (
    id: number,
    updatedReview: Omit<ReviewType, "id" | "recommend">
  ) => void;
  deleteReview: (id: number) => void;
  toggleReview: (id: number) => void;
}

function ReviewList({
  reviews,
  updateReview,
  deleteReview,
  toggleReview,
}: ReviewListProps) {
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <ReviewItem
            key={review.id}
            reviews={review}
            updateReview={updateReview}
            deleteReview={deleteReview}
            toggleReview={toggleReview}
          />
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
