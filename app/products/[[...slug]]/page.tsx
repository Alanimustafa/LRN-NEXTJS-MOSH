import React from 'react'

interface Props {
    params : { slug: string[] }
};

// interface productList {
//   id: number,
//   title: string,
//   size: string,
//   color: string,
// }

  

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