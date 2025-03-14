import React from 'react'
import Link from 'next/link'

const UsersPage = async () => {

  interface User {
    id: number,
    name: string,
    email: string,
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
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
          <h2 className='text-2xl bg-red-100'>Current Users</h2>
          <h3 className="userName">
            <ol>
              {users.map((user) => (
                <li key={user.id}>
                  <Link href={`/users/${user.id}`}>
                    {user.id}{'-'} {user.name}
                  </Link>
                </li>
              ))}
            </ol>
          </h3>
        </div>
    </>
  )
}

export default UsersPage