import  React,  {Suspense}  from 'react'
import PhotosTable from './components/PhotosTable';
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
