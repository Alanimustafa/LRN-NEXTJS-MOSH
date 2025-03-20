import React from 'react'
import Link from 'next/link'
import UserTable from './UserTable';

const UsersPage = () => {

  
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
            <UserTable/>
          </h3>
          <br />
        </div>
    </>
  )
}

export default UsersPage