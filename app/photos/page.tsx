import  React,  {Suspense}  from 'react'
import PhotosTable from './components/PhotosTable';
import Spinner from '../components/Spinner';

const Photos = () => {

  return (
    <>
     <div>
        <h1>Photos Page</h1>
     </div>
        <div>
          <Suspense fallback={<Spinner />}>
          
            <PhotosTable/>
          </Suspense>
        </div>
    </>
  )
}

export default Photos;
