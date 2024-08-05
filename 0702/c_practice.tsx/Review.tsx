import React, { useRef, useState } from 'react'
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

export interface ReviewType {
  id: number;
  title: string;
  content: string;
  recommend: boolean;
}

export default function Review() {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  const nextId = useRef(1)

  const addReview = (review: Omit<ReviewType,'id'| 'recommend'>) => {
    const newReview = {
      id: nextId.current,
      ...review,
      recommend:false

    }
    setReviews([...reviews, newReview])
    nextId.current += 1;
  };

  const updateReview = (id: number, updateReview: Omit<ReviewType,'id'| 'recommend'>) => {
    setReviews(reviews.map(review =>
      review.id === id ? { ...review, ...updateReview } : review
    ));
  };

  const deleteReview = (id: number) => {
    setReviews(
      reviews.filter(review => review.id !== id)
    );
  };

  const toggleReview = (id: number) => {
    setReviews(
      reviews.map(review => review.id === id ? {...review, recommend: !review.recommend} : review)
    );
  };

  return (
    <div>
      <h1>리뷰 게시판</h1>

      <ReviewForm 
      addReview={addReview}
      />

      <ReviewList 
      reviews={reviews}
      toggleReview={toggleReview}
      updateReview={updateReview}
      deleteReview={deleteReview}
      />
      
    </div>
  )
}