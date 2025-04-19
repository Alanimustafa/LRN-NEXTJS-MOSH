"use client"
import React from 'react'
import { CldUploadWidget, CloudinaryUploadWidgetResults } from 'next-cloudinary'

const UploadPage = () => {
  const handleSuccess = (result: CloudinaryUploadWidgetResults) => {
    const info = result?.info
    console.log('Upload success!')
    console.log('Full result object:', result)
    console.log('Uploaded file info:', info)

    // Optional: Log some specific file info
    if (typeof info === 'object' && info !== null) {
      console.log('File URL:', info.secure_url)
      console.log('Public ID:', info.public_id)
      console.log('Format:', info.format)
      console.log('Dimensions:', info.width + 'x' + info.height)
      console.log('Bytes:', info.url)
    }
  }

  return (
    <CldUploadWidget 
      uploadPreset='lrnnextjs'
      onSuccess={handleSuccess}
    >   
      {({ open }) => {
        const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault()
          open()
        }

        return (
          <button 
            onClick={handleOnClick} 
            className='bg-blue-500 text-white p-2 rounded w-fit hover:bg-blue-700 cursor-pointer'
          >
            Upload an image
          </button>
        )
      }}
    </CldUploadWidget>
  )
}

export default UploadPage
