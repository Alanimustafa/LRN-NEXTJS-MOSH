"use client"
import React from 'react'
import { CldUploadWidget, CloudinaryUploadWidgetResults, CldImage } from 'next-cloudinary'
import { useState } from 'react'

interface CloudinaryResult {
    public_id: string
    url: string
    secure_url: string
    format: string
    width: number
    height: number
    display_name: string
}


const UploadPage = () => {
    const [publicId, setPublicId] = useState("");
    const [fileName, setFileName] = useState("");


    // Handle the upload success event
  const handleSuccess = (result: CloudinaryUploadWidgetResults) => {
    const uploadInfo = result?.info
    console.log('Upload success!')
    console.log('Full result object:', result)
    console.log('Uploaded file info:', uploadInfo)

    // Optional: Log some specific file uploadInfo
    if (typeof uploadInfo === 'object' && uploadInfo !== null) {
      console.log('File URL:', uploadInfo.secure_url)
      console.log('Public ID:', uploadInfo.public_id)
      console.log('Format:', uploadInfo.format)
      console.log('Dimensions:', uploadInfo.width + 'x' + uploadInfo.height)
      console.log('URL:', uploadInfo.url)
    }

    if (result.event !== 'success') {
        console.error('Upload failed:', result.event)
        return
    } 
    const info = result.info as CloudinaryResult
    setPublicId(info.public_id)
    setFileName(info.display_name)
    console.log('Upload successful!')
  }

  return (
    <>
    {publicId && (
        <>
            <CldImage src={publicId} width={230} height={240} alt="Uploaded Image" className='border-b-blue-400'/>
            <p>{fileName}</p>
        </>
)}
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
    </>
  )
}

export default UploadPage
