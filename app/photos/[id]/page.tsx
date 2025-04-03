import React from 'react'
import Link from 'next/link';

interface Props {

    params : { id: number }
}

const PhotosId = async (props: Props) => {
    const params = await props.params;
    const { id } = params;

    return (
      <div>
        <h2 className='text-yellow-500 text-3xl text-center'>PhotosId - {id}</h2>
        <Link href='/photos' className="px-4 py-2 bg-blue-300 text-black border-4 border-gray-300 rounded-md  hover:bg-black hover:text-blue-300 hover:border-4 hover:border-orange-500 cursor-pointer mr-5">← Back</Link>
      </div>
    )
}

export default PhotosId
