import React, { useState } from "react";
import { ReviewType } from "./Review";

interface ReviewItemProps {
  reviews: ReviewType;
  updateReview: (
    id: number,
    updatedReview: Omit<ReviewType, "id" | "recommend">
  ) => void;
  deleteReview: (id: number) => void;
  toggleReview: (id: number) => void;
}

function ReviewItem({
  reviews,
  updateReview,
  deleteReview,
  toggleReview,
}: ReviewItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(reviews.title);
  const [content, setContent] = useState(reviews.content);

  const handleUpdate = () => {
    updateReview(reviews.id, { title, content });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleUpdate}>저장</button>
        </div>
      ) : (
        <div>
          <span
            style={{
              textDecoration: reviews.recommend ? 'line-through' : 'none'
            }}
            onClick={() => toggleReview(reviews.id)}
          >
            <span> {reviews.title}</span>
            <span>{reviews.content}</span>
          </span>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={() => deleteReview(reviews.id)}>삭제</button>
        </div>
      )}
    </div>
  );
}

export default ReviewItem;
