import React from 'react'
import React01 from './a_React/React01'
import React02 from './a_React/React02'
import Route from './b_Route/Route'

// 0413 폴더 내의 전체 컴포넌트를 담는 폴더
export default function Index() {
  return (
    <>
      <h2>a_React</h2>
      <React01 />
      <React02 />

      <h2>b_Route</h2>
      <Route />
    </>
  )
}