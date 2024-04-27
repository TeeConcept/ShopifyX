import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-black w-full text-white mt-5'>
        <div className='py-4 sm:py-8 max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px] mx-auto'>
            <div className='grid sm:grid-cols-3 justify-between text-[10px] sm:text-[13px] md:text-[15px] font-[300]'>
            <p className='col-span-2'>Need help? Email me at: olonts@gmail.com</p>
            <p>Follow me on <a href='https://twitter.com/ifetolu5'><span className='hover:underline'>twitter</span></a></p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer