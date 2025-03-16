"use client"

import React from 'react'

const AddToCart = () => {

    const clicked = () => {
        console.log('Product added to cart')
    }
  return ( 
      <>
        <div>
          <button onClick={clicked} className='btn btn-primary'>Add to cart</button>
        </div>
      </>

  )
}

export default AddToCart