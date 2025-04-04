"use client"
// This is a client component

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NewUserPage = () => {
  const router = useRouter()

  const handleCreateUser = () => {
    // Simulate user creation logic
    alert("User created!")
    // Redirect to the users page after user creation
    router.push("/users")
  }

  return (
    <>
      <div>
        <h1 className='text-3xl bg-blue-100'>NewUserPage</h1>
        <br />
        <Link href="/" className='btn btn-soft btn-primary'>Home</Link>
        <br />
        <button onClick={handleCreateUser} className="btn btn-soft btn-ghost p-5 text-2xl">Create</button>
      </div>
    </>
  )
}

export default NewUserPage