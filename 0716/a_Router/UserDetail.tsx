import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UserDetail: React.FC = () => {

  const {userId} = useParams<{userId: string}>();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      if(!response.ok) {
        throw new Error('Fetch Error');
      }
      const data = await response.json();
      setUser(data);
    }

    fetchUser();
  },[userId])


  return (
    <div>
      <h2>User List Detail</h2>
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ) : (
        <p>Loading User...</p>
      )}
    </div>
  )
}

export default UserDetail;