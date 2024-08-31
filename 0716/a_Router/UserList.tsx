import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

interface UserList {
  id: number;
  name: string;
}

export default function UserList() {
  const [users, setUsers] = useState<UserList[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if(!response.ok) {
        throw new Error('Fetch Error');
      }
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  },[])


  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
