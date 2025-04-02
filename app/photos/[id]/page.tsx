import React from 'react'

interface Props {
  params: { id: number; title: string}    
}
  const PhotoDetails = ({params: {id, title}} : Props) => {
    console.log (`This The title: ${title}`);
  return (
    <div>
        <h1>PhotoDetails</h1>
        <br />
        <h2>{id} - {title}</h2>
    </div>
  )
}

export default PhotoDetails