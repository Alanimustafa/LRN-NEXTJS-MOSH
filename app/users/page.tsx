import React from 'react'
import Link from 'next/link'

const UsersPage = () => {
  return (
    <>
        <div>UsersPage</div>
        <Link href="/">Home</Link>
        <br />
        <Link href='/users/new'>New user</Link>
    </>
  )
}

export default UsersPage