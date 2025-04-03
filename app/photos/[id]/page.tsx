import React from 'react'

interface Props {

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
