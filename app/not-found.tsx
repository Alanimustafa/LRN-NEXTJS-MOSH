import React from 'react'
import Link from 'next/link'



const notFound = () => {
  return (
    <div>
        <h1>404 - Page Not Found</h1>
        <p className="text-2xl bg-red-500 w-fit">This page does not exist. Please check the URL or return to the homepage.</p>
        <br />
        <Link href="/" className='btn btn-primary btn-primary'>Home</Link>
    </div>
  )
}

export default notFound