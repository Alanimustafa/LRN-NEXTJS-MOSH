import React from 'react';
import Link from 'next/link';

const adminHomePage = () => {
  return (
    <>
      <div>
        <h1>Admin HomePage</h1>
      </div>
      <br />
      <Link href="/" className='btn btn-soft btn-primary'>
        Go Home
      </Link>
    </>
  )
}

export default adminHomePage