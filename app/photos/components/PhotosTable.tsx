import React from 'react'
import Link from 'next/link';
import { sort } from 'fast-sort';

interface Photo {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
    };

interface Props {
    sortOrder : string;
};
//                     <Link href='/users?sortOrder=address'>Address</Link>     
const PhotosTable = async ({sortOrder} : Props) => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/photos');
    const photos : Photo[] = await res.json();
    console.log(photos);

  return (
    <div>PhotosTable</div>
  )
}

export default PhotosTable