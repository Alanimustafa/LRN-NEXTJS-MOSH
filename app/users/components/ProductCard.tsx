
import React from 'react'
import AddToCart from './AddToCart';
import Link from 'next/link';

const ProductCard = () => {

  return (
    <>
    <div>
        <div>ProductCard</div>
        <Link href="/">Home</Link>
        
        <br />
        <AddToCart/>
    </div>
    </>
  )
}

export default ProductCard