import React from 'react'

interface Props {
    params : { slug: string[] }
};

const ProductsPage = async (props : Props) => {
    const params = await props.params;
    const { slug } = params;
  return (
    <>
    <div> 
      <h1>{ slug } ProductsPage</h1>
      
    </div>
    
    </>
  )
}

export default ProductsPage