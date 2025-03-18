import React from 'react'
import Link from 'next/link'

const NewUserPage = () => {
  return (
    <>
      <div>
        <h1 className='text-3xl bg-blue-100'>NewUserPage</h1>
        <br />
        <Link href="/" className='btn btn-soft btn-primary'>Home</Link>
        <br />
        <button className="btn btn-soft btn-accent">TestButton</button>
      </div>
    </>
  )
}

export default NewUserPage