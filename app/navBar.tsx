import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <>
        <div className="flex bg-#cc3fc-100 border-4 border-orange-500 rounded-lg p-4">
            <Link href='/' className="px-4 py-2 bg-orange-500 text-black border-4 border-gray-300 rounded-md  hover:bg-black hover:text-orange-500 hover:border-4 hover:border-orange-500 cursor-pointer mr-5">Home</Link>
            <Link href='/users' className="px-4 py-2 bg-orange-500 text-black border-4 border-gray-300 rounded-md  hover:bg-black hover:text-orange-500 hover:border-4 hover:border-orange-500 cursor-pointer mr-5">Users</Link>
            <Link href='/products' className="px-4 py-2 bg-orange-500 text-black border-4 border-gray-300 rounded-md  hover:bg-black hover:text-orange-500 hover:border-4 hover:border-orange-500 cursor-pointer mr-5">Products</Link>
            <Link href='/admin' className="px-4 py-2 bg-orange-500 text-black border-4 border-gray-300 rounded-md  hover:bg-black hover:text-orange-500 hover:border-4 hover:border-orange-500 cursor-pointer mr-5">Admin</Link>
            <Link href='/about' className="px-4 py-2 bg-orange-500 text-black border-4 border-gray-300 rounded-md  hover:bg-black hover:text-orange-500 hover:border-4 hover:border-orange-500 cursor-pointer mr-5">About</Link>
            <Link href='/photos' className="px-4 py-2 bg-orange-500 text-black border-4 border-gray-300 rounded-md  hover:bg-black hover:text-orange-500 hover:border-4 hover:border-orange-500 cursor-pointer mr-5">Photos</Link>            
            <Link href='/users/apiusers' className="px-4 py-2 bg-orange-500 text-black border-4 border-gray-300 rounded-md  hover:bg-black hover:text-orange-500 hover:border-4 hover:border-orange-500 cursor-pointer mr-5">API-Users</Link>            
            <Link href='/products/apiproducts' className="px-4 py-2 bg-orange-500 text-black border-4 border-gray-300 rounded-md  hover:bg-black hover:text-orange-500 hover:border-4 hover:border-orange-500 cursor-pointer mr-5">API-Products</Link>
            <Link href='/upload' className="px-4 py-2 bg-orange-500 text-black border-4 border-gray-300 rounded-md  hover:bg-black hover:text-orange-500 hover:border-4 hover:border-orange-500 cursor-pointer mr-5">Upload</Link>
        </div>
    </>
  )
}

export default NavBar