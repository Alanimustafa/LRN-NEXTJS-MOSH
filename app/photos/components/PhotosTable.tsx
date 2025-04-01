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
    const sortedPhotos = sort(photos).asc(photo =>
        sortOrder === "title" ? photo.title :
        sortOrder === "url" ? photo.url :
        sortOrder === "thumbnailUrl" ? photo.thumbnailUrl :
        photo.id
      );

  return (
    <>
    <div>
        <h2>PhotosTable</h2>
    </div>
    <table className='table table-bordered text-2xl text-orange-300' >
        <thead className='text-yellow-100 text-xl'>
            <tr>
            <th>
                <Link href='/photos?sortOrder=id'>ID</Link>
            </th>
            <th>
                <Link href='/photos?sortOrder=albumId'>Album ID</Link>
            </th>
            <th>
                <Link href='/photos?sortOrder=title'>Title</Link>
            </th>
            <th>
                <Link href='/photos?sortOrder=url'>URL</Link>
            </th>
            <th>
                <Link href='/photos?sortOrder=thumbnailUrl'>Thumbnail URL</Link>     
            </th> 
            </tr> 
        </thead> 
        <tbody className='text-yellow-200 text-lg'>
            {sortedPhotos.map(photo => (
            <tr key={photo.id}>
                <th>
                    <Link href={`/photos/${photo.id}`}>{photo.id}</Link>
                </th>
                <th>
                    <Link href={`/photos/${photo.albumId}`}>{photo.albumId}</Link>
                </th>
                <th>
                    <Link href={`/photos/${photo.title}`}>{photo.title}</Link>
                </th>
                <th>
                    <Link href={`/photos/${photo.url}`}>{photo.url}</Link>
                    </th>
                <th>
                    <Link href={`/photos/${photo.thumbnailUrl}`}>{photo.thumbnailUrl}</Link>
                </th> 
            </tr> 
            ))}
        </tbody>
    </table>
    </>
  )
}

export default PhotosTable