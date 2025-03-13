import React from 'react'
import Link from 'next/link'

const NewUserPage = () => {
  return (
    <>
      <div>
        <h1 className='text-3xl bg-blue-100'>NewUserPage</h1>
        <br />
        <Link href="/">Home</Link>
      </div>
    </>
  )
}

export default NewUserPage