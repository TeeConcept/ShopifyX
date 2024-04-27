import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='bg-[#051911] text-white sticky top-0 z-50'>
        <div className='text-[11px] sm:text-[14px] md:text-[16px] flex justify-between max-w-[300px] sm:max-w-[480px] md:max-w-[700px] lg:max-w-[1030px] py-3 sm:py-6 mx-auto'>
        <Link to="/"> <p>Tech with Olonts</p></Link>
            <ul className='flex justify-between'>
              <Link to="/"><li className='mx-[2px] sm:mx-2'>Home</li></Link>  
                <Link to="/e_design" ><li className='mx-[2px] sm:mx-2'>Design</li></Link>
                <Link to="/e_development" ><li className='mx-[2px] sm:mx-2'>Development</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar