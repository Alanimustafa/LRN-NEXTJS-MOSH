import React from 'react'
import Link from 'next/link'

const UsersPage = async () => {

  interface User {
    id: number,
    name: string,
    email: string,
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'}); // catching disabled for demonstration purposes. Next JS automatically caches responses, so no need to worry about caching here.

  
  const users: User[] = await res.json();

  return (
    <>
        <div>UsersPage</div>
        <Link href="/">Home</Link>
        <br />
        <Link href='/users/new'>New user</Link>
        <br />
        <br />
        <div className="currentUsers">
          <h2 className='text-2xl bg-red-100'>Current Users List</h2>
          <h2 className="timerendering bg-blue-100"> 
            {new Date().toLocaleTimeString()}
          </h2>
          <h3 className="userName">
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <Link href={`/users/${user.id}`}>
                    {user.name}
                  </Link>
                </li>
              ))}
            </ul>
          </h3>
        </div>
    </>
  )
}

export default UsersPage