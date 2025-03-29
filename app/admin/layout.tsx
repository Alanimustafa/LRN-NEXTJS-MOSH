import React, { ReactNode} from 'react'; 

interface Props {
  children : ReactNode;
}

const adminLayout = ({ children }: Props) => {
  return (
    <>
        <div className='flex'>
            <aside className='bg-yellow-300 p-5 mr-5 text-black text-3xl border-3 border-orange-500 rounded hover: bg-black hover: text-yellow-500 hover: text-3xl hover: border-3 hover: border-orange-500 hover: rounded'>Admin Side Bar</aside>
            <div>{ children }</div>
        </div>
    </>
  )
}

export default adminLayout