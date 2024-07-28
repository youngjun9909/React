
// dog01 이미지를 생성
// : 픽사베이에서 이미지 다운로드
// : images 폴더 내에 dog01 저장

// Component03 컴포넌트 내에 
// : img 태그를 사용하여 - puppy02를 마크업

// Component03 컴포넌트를 index.tsx 파일에서 호출(사용)


import React from 'react'

import dog01 from '../../../images/dog01.jpg'

export default function Component03() {
  return (
    <img src={dog01} alt="고양이" width={300} />
  )
}
