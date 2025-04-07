'use client'
import React from 'react'
import { useRouter } from 'next/navigation'




const UserNotFound = () => {
    const Router = useRouter();

    const RedirectToHomePage = () => {
        Router.push('/users')
    }
    
  return (
    <>
        <h1 className='text-red-500 bg-white'>User Not Found</h1>
        <button onClick={RedirectToHomePage} className='btn btn-soft btn-primary w-fit'>Back</button>
    </>
  )

}

export default UserNotFound