'use client'
import React from 'react'

const ErrorPage = () => {
  return (
    <div>
        <h1>Something went wrong</h1>
        <p>Please try again later.</p>
        <button className='btn btn-secondary' onClick={() => window.location.reload()}>Reload</button>
        <button className='btn btn-primary' onClick={() => window.history.back()}>Go Back</button>        
    </div>
  )
}

export default ErrorPage