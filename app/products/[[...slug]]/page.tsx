import React from 'react'
import Link from 'next/link'

interface Props {
    params : { slug: string[] }
};

const ProductsPage = async (props : Props) => {
    const params = await props.params;
    const { slug } = params;
  return (
    <>
    <div> { slug } ProductsPage  </div>
    <Link href="/" className='btn btn-soft btn-primary'>
        <button>Home</button>
    </Link>
    </>
  )
}

export default ProductsPage