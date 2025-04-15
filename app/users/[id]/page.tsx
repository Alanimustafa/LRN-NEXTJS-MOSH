import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
    params: { id: number,
              name: string,
              email: string
    };
}

const UserDetailPage = ({params: {id}} : Props) => {
  if (id > 10 || id < 1) {
    notFound(); // This will trigger the 404 page
  } 
  return (
    <div>
      <h1 className='text-2xl'> UserDetailPage {id}</h1>
    </div>
  )
}

export default UserDetailPage