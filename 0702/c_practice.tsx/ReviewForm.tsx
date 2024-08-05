import React, { useState } from 'react'
import { ReviewType } from './Review'

interface ReviewFormProps {
  addReview: (review:Omit<ReviewType, 'id'|'recommend'>) => void;
}

function ReviewForm({addReview}: ReviewFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [recommend, setRecommend] = useState(false);

  const handleAddReview = () => {
    addReview({title, content})
    setTitle('')
    setContent('')
    setRecommend(false)
  }


  return (
    <div>
      <input type="text" placeholder='제목을 작성해주세요' value={title} onChange={(e) => setTitle(e.target.value)}
      />
      <input type="text" placeholder='내용을 작성해주세요' value={content} onChange={(e) => setContent(e.target.value)}/>
      <button onClick={handleAddReview}>리뷰 등록</button>
    </div>
  )
}

export default ReviewForm
