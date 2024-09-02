import React from 'react'

//# 1. 인라인 스타일
// : 인라인 스타일은 리액트 컴포넌트에 직접 스타일을 지정하는 방법
export default function Style01() {

  const divStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px'
  }

  const paraStyle = {
    backgroundColor: 'lightcoral',
    color: '#333'
  }

  return (
    <div style={divStyle}>
      This is an inline style component
      <p style={paraStyle}>This is a paragraph</p>
    </div>
  )
}
