import React from 'react'
import Link from 'next/link'
import UserTable from './UserTable';

interface Props {
  searchParams : {
    sortOrder : string
  }
}
const UsersPage = ( {searchParams : { sortOrder }}: Props) => {
console.log (sortOrder);
  
  return (
    <>
        <div>UsersPage</div>
        <Link href="/" className='btn btn-soft btn-primary'>Home</Link>
        <br />
        <Link href='/users/new' className='btn btn-soft btn-secondary'>New user</Link>
        <br />
        <br />
        <div className="currentUsers">
          <h2 className='text-2xl bg-red-100'>Current Users List</h2>
          <h2 className="timerendering bg-blue-100"> 
            {new Date().toLocaleTimeString()}
          </h2>
          <h3 className="userName">
            <UserTable sortOrder = {sortOrder}/>
          </h3>
          <br />
        </div>
    </>
  )
}

export default UsersPage