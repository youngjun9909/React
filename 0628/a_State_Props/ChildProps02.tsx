import React from 'react'
import { UserType } from './StateProps02';

// Props에 대한 타입 정의

interface ChildComponentProps {
  userInfo: UserType;
  onUpdate: (newInfo: UserType) => void;
}

export default function ChildProps02({userInfo, onUpdate}: ChildComponentProps) {

  let newData: UserType = {
    userName: '박영준',
    height: 179
  }

  const updateInfo = () => {
    // 부모로 부터 전달받은 상태 업데이트를 사용
    onUpdate(newData)
  }

  return (
    <>
    <p>사용자 이름: {userInfo.userName}</p>
    <p>사용자 키: {userInfo.height}</p>
    <button onClick={updateInfo}>사용자 정보 업데이트</button>
    </>
  )
}
