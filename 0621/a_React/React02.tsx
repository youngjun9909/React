import React, { useState } from 'react';

//! 리액트와 일반 TS의 차이
// 간단한 카운터 예제
// : UI 컴포넌트가 클래스 또는 함수 형태로 작성
// : 함수형 컴포넌트 사용을 권장
// : 컴포넌트를 기반으로 UI와 상태관리를 구현


export default function React02() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  }
  const Decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}