import React from 'react'
import { FaStar } from "react-icons/fa";
import { start } from 'repl';

interface ItemType {
  // 여행을 위한 짐 싸기
  // 짐 항목의 이름, 준비 여부를 props로 전달 받음
  name: string;
  isPacked: boolean;
}

function Item({name, isPacked}: ItemType) {

  //! if 조건문을 사용한 조건부 렌더링
  // isPacked가 true의 값인 경우: 짐 싸기 완료
  // if (isPacked) {
  //   return <li className='item'>{name} ✔️</li>
  // }else {
  //   return <li>{name} ✖️</li>
  // }
  // 조건부로 아무것도 반환하지 않는 경우: null 반환

  //! 삼항 연산자를 사용한 조건부 렌더링*****
  // return (
  //   <li className='item'>
  //     {isPacked ? name + '✔️' : name + '✖️'}
  //   </li>
  // )
  //! 논리 연산자(&&)를 사용한 조건부 렌더링*****
  return (
    <li className='item'>
      {name} {isPacked && <FaStar />}
    </li>
  )
}

// react-icons 외부 라이브러리 사용
// : 리액트에서 다양한 아이콘을 사용하기 위한 라이브러리
// npm install react-icons


export default function Rendering01() {
  const score = 4;
  const stars: JSX.Element[] = [];

  for (let i = 0; i < score; i++) {
    stars.push(<FaStar key={i}/>)
  }

  return(
    <section>
      <p>여행용 짐 목록</p>
      <ul>
        <Item 
          name='과자'
          isPacked={true}
        />
        <Item 
          name='음료'
          isPacked={true}
        />
        <Item 
          name='고기'
          isPacked={false}
        />
      </ul>
      <div style={{margin:'20px', border: '2px solid black'}}>
      {score >= 0 && <FaStar />}
      </div>
      <div>
      {stars}
      </div>
    </section>
  )
}
