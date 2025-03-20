import React from 'react'

interface Props {
    params : { slug: string[] }
};

const ProductsPage = async (props : Props) => {
    const params = await props.params;
    const { slug } = params;
  return (
    <div> { slug } ProductsPage  </div>
  )
}

export default ProductsPage