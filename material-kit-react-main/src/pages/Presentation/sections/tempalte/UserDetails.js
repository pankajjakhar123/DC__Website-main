import React from 'react';
import user from './data';
import { Link } from 'react-router-dom';

function UserDetails() {
  const users = user;
  
  return (
    <>
      <h1 className="text-indigo-600 m-12">Hello,I am a User</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id} ><Link to={`/users/${u.id}`}>{u.name}</Link>
</li>
        ))}
      </ul>
    </>
  );
}

export default UserDetails;
