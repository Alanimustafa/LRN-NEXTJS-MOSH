import React from 'react'

interface Props {
<<<<<<< HEAD
    params : { id: number }
}

const PhotosId = async (props: Props) => {
    const params = await props.params;
    const { id } = params;

    return (
      <div>
        <h2 className='text-yellow-300 text-3xl text-center'>PhotosId - {id}</h2>
      </div>
    )
}

export default PhotosId
=======
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
>>>>>>> 522e9179110f7dc920231defd371453f058a8bc3
