import React from 'react'
import Link from 'next/link'

const UsersPage = async () => {

  interface User {
    id: number,
    name: string,
    email: string,
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/users'); // catching disabled for demonstration purposes. Next JS automatically caches responses, so no need to worry about caching here.


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
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th><Link href={`/users/${user.id}`}>{user.id}.</Link></th> 
                  <th><Link href={`/users/${user.id}`}>{user.name}.</Link></th> 
                  <th><Link href={`/users/${user.id}`}>{user.email}.</Link></th> 
                </tr>
              ))}
              </tbody>
            </table>
          </h3>
        </div>
    </>
  )
}

export default UsersPage