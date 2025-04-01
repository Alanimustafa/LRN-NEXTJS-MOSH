import React from 'react'

const PhotosTable = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/photos');
    const photos = await res.json();
    console.log(photos);
    
  return (
    <div>PhotosTable</div>
  )
}

export default PhotosTable