import React from 'react';
import PhotoDetails from './[PhotoId]/page';

interface Props {
    params: { id: number }
}

const UserDetailPage = ({params: {id}} : Props) => {
  return (
    <div>UserDetailPage {id}
    
    </div>
  )
}

export default UserDetailPage