
import React from 'react'
import Link from 'next/link';
// import styles from './ProductCart.module.css';

const ProductCard = () => {

  return (
    <>
    <div>
        <h3 className="text-5lx bg-blue-100">ProductCard</h3>
        <Link href="/" className='btn btn-soft btn-primary  '>Home</Link>
        <br />
        {/* <AddToCart/> */}
    </div>
    </>
  )
}

export default ProductCard