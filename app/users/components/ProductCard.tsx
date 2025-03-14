
import React from 'react'
import AddToCart from './AddToCart';
import Link from 'next/link';

const ProductCard = () => {

  return (
    <>
    <div>
        <h3>ProductCard</h3>
        <Link href="/">Home</Link>
        <br />
        <AddToCart/>
    </div>
    </>
  )
}

export default ProductCard