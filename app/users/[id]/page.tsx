import React from 'react';

interface Props {
    params: { id: number }
}

const UserDetailPage = ({params: {id}} : Props) => {
  return (
    <div>
      <h1 className='text-2xl'> UserDetailPage {id}</h1>
    </div>
  )
}

export default UserDetailPage