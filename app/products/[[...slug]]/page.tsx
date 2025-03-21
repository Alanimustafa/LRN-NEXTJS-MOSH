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
    <Link href="/">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer">Home</button>
    </Link>
    </>
  )
}

export default ProductsPage