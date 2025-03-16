
import React from 'react'
import AddToCart from './AddToCart';
import Link from 'next/link';
import styles from './ProductCart.module.css';

const ProductCard = () => {

  return (
    <>
    <div className={styles.card}>
        <h3>ProductCard</h3>
        <Link href="/">Home</Link>
        <br />
        <AddToCart/>
    </div>
    </>
  )
}

export default ProductCard