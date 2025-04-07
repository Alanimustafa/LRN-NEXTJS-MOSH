
import PhotosTable from './components/PhotosTable';

const Photos = () => {

  return (
    <>
     <div>
        <h1>Photos Page</h1>
     </div>
        <div>
            <PhotosTable sortOrder="asc"/>
        </div>
    </>
  )
}

export default Photos;
