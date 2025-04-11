"use client"
import React from 'react'

interface Props {
    error : Error;
    reset: () => void;
    // error: Error & { statusText: string; status: number; } | null;   
    };
const UserError = ( {error}: Props) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-3xl text-red-500'>User Error</h1>
        <p className='text-xl text-red-300'>Sorry, we could not load the users.</p>
        <button className='btn btn-secondary' onClick={() => window.location.reload()}>Reload</button>
        <button className='btn btn-primary' onClick={() => window.history.back()}>Go Back</button>
        <p className='text-red-500 bg-yellow-200 w-50 m-10 justify-center flex border-5'>{error.message}</p>
        <p className='text-red-500 bg-yellow-200 w-50 m-10 justify-center flex border-5'>{error.name}</p>
    </div>
  )
}

export default UserError