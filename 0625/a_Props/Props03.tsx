import React from 'react'

/*
! 두 개의 컴포넌트 구성

UserProfile 컴포넌트
: 두 가지 props를 전달 받음
  - username: 문자열
  - age: 숫자
  >> 이름과 나이를 전달받고 '안녕하세요, {username}님, 당신의 나이는 {age}살 입니다.
  >> 컴포넌트 디자인: 폰트 굵기(bold), 마진(10px)

Message 컴포넌트
: 하나의 props를 전달 받음
  - text: 문자열
  >> 메시지를 단순하게 화면에 표시
    '오늘도 좋은 하루 되세요'
    >> 색상 green , 마진(5px)
    >> 컴포넌트에 전달되는 props가 없을 경우 '전달할 내용이 없습니다' 출력

! 부모 컴포넌트
: UserProfile과 Message 컴포넌트를 사용하여 사용자 프로필과 환영 메시지를 표시

*/
type UserType = {
  username: string;
  age: number;
}

const userStyle = {
  fontWeight: 'bold',
  margin: '10px'
}

const UserProfile = ({username, age}: UserType) => {
  return (
    <div style={userStyle}>안녕하세요, {username}님, 당신의 나이는 {age}살 입니다.</div>
  )
}

type MessageType = {
  text: string;
}

function Message ({text}:MessageType) {
  return(
    <div style={{color: 'green', margin: '5px'}}>
      {text}
    </div>
  )
}

Message.defaultProps = {
  text: '전달할 내용이 없습니다.'
}

export default function Props03() {
  return (
    <div>
      <UserProfile username='박영준' age={26} />
      <Message text='오늘도 좋은 하루 되세요~!'/>
      <Message />
    </div>
  )
}