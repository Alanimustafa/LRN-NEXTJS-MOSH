import React, { ReactNode} from 'react'; 
import Link from 'next/link';
interface Props {
  children : ReactNode;
}

const adminLayout = ({ children }: Props) => {
  return (
    <>
        <div className='flex flex-row gap-5 p-5 bg-yellow-950 min-h-screen'>
            <aside className='bg-yellow-300 p-5 mr-5 text-black text-3xl border-3 border-orange-500 rounded hover: bg-black hover: text-yellow-500 hover: text-3xl hover: border-3 hover: border-orange-500 hover: rounded'>
              <h1 className=' mb-6'>Admin Side Bar</h1>
              <Link href = '/admin/chicago' className="px-8 py-2 h-12 mt-auto bg-orange-500 text-black border-4 border-gray-300 rounded-md  hover:bg-black hover:text-orange-500 hover:border-4 hover:border-orange-500 cursor-pointer mr-5">Chicago</Link>
            </aside>
            <div>{ children }</div>

            <Link href = '/admin' className="px-10 py-2 h-12 bg-orange-500 text-black border-4 border-gray-300 rounded-md  hover:bg-black hover:text-orange-500 hover:border-4 hover:border-orange-500 cursor-pointer mr-5">Back</Link>
            
        </div>
    </>
  )
}

export default adminLayout