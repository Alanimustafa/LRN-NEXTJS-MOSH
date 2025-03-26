import React from 'react';
import Link from 'next/link';

const adminHomePage = () => {
  return (
    <>
      <div>Admin HomePage</div>
      <br />
      <Link href="/" className='btn btn-soft btn-primary'>
        Go Home
      </Link>
    </>
  )
}

export default adminHomePage