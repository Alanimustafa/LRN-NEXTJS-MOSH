import React, { Children } from 'react'

const adminLayout = () => {
  return (
    <>
        <div className='flex'>
            <aside className='bg-slate-200 p-5 mr-5'>Admin Side Bar</aside>
            <div>{ Children }</div>
        </div>
    </>
  )
}

export default adminLayout