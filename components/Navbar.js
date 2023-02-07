import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[5.875rem] bg-[#0095A0] flex items-center'>
        {/* navbar */}
        <main className='default-margin w-full flex justify-between'>
            {/* Logo  */}
            <div className='text-2xl text-white font-bold'>Logo</div>
            {/* Search box and add product section */}
            <div className='flex justify-center items-center gap-4 md:w-1/2'>
                {/* search box */}
                <div className='flex-grow h-[3.375rem]'>
                    <input type="text" className='border-2 border-white w-full h-full bg-[#0095A0] px-8 placeholder-white focus:border-transparent active:border-transparent' placeholder='Search by Title or Brand'/>
                </div>
                {/* Add product button */}
                <Link href="/">
                    <div className='h-[3.375rem] w-[10.25rem] bg-white flex justify-center items-center'>Add Product</div>
                </Link>
            </div>
        </main>
    </div>
  )
}

export default Navbar