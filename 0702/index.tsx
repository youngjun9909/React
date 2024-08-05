import React from 'react'
import Array01 from './a_Array/Array01'
import Array02 from './a_Array/Array02'
import Array03 from './a_Array/Array03'
import Array04 from './b_Array/Array04'
import Array05 from './b_Array/Array05'
import GoalApp from './b_Array/c_practice/GoalApp'
import Review from './c_practice.tsx/Review'

export default function Index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>0702</h1>

      <h2>1. 배열 렌더링</h2>
      <Array01 />
      <Array02 />
      <Array03 />

      <h2>2. 배열 렌더링 예제</h2>
      <Array04 />
      <Array05 />

      <h2>3. 종합 예제</h2>
      <GoalApp />

      <h2>과제</h2>
      <Review />
    </div>
  )
}
