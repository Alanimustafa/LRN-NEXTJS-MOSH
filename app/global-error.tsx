'use client'
import React from 'react'

const GLobalError = () => {
  return (
    <div>
        <h1 className='text-3xl text-red-500'>Global Error</h1>
        <p className='text-xl text-red-300'>Sorry, we could not load the page.</p>
        <button className='btn btn-secondary' onClick={() => window.location.reload()}>Reload</button>
        <button className='btn btn-primary' onClick={() => window.history.back()}>Go Back</button>
    </div>
  )
}

export default GLobalError