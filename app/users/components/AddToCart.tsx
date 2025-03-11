"use client"

import React from 'react'

const AddToCart = () => {

    const clicked = () => {
        console.log('Product added to cart')
    }
  return (
    <button onClick={clicked}>Add to cart</button>

  )
}

export default AddToCart