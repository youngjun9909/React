import React, { useEffect, useState } from 'react'

//! 사용자 정보 가져오기
// jsonplaceholder에서 users 데이터를 사용
// : 사용자 목록을 비동기적으로 호출

// 각 사용자의 이름과 이메일을 표시

type User = {
  id: number;
  name: string;
  email: string;
}

export default function Practice01() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchUsers() {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!response.ok) {
        throw new Error (`HTTP Error! status: ${response.status}`)
      }

      const data = await response.json()
      setUsers(data)

    }catch(error){
      setError((error as Error).message);

    }finally{
      setLoading(false)
    }
  }
  
  // useEffect(() => {
  //   fetchUsers();
  // },[])

  return (
    <div>
      <h3>Users 사용자 데이터 표시</h3>
      <button onClick={fetchUsers}>사용자 불러오기</button>
      {loading && <p>로딩중입니다.</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}

      {!loading && !error && (
        <ul>
          {users.map(user =>(
            <li key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </li>

          ))}
        </ul>
      )}
    </div>
  )
}
