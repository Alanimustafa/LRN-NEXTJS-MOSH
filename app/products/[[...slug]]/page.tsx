import React from 'react'

interface Props {
    params : { slug: string[] }
};

const ProductsPage =  (props : Props) => {
    const params = props.params;
    const { slug } = params;
  return (
    <div>ProductsPage { slug } </div>
  )
}

export default ProductsPage