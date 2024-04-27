import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const Popup = props => {
  return (<div>

 
    <div className="fixed bg-[#00000050] w-full h-[100vh] top-0 left-0 z-50">
      <div className="relative max-w-[270px] sm:max-w-[500px] my-32 mx-auto opacity-[20] border-2 max-h-[200px] sm:max-h-[280px] p-1 sm:p-3 bg-[#fff] rounded-xl overflow-auto">
        <div className='bg-[#04220C] p-3 rounded-md'>
        <span className="cursor-pointer fixed w-6 h-6 rounded-[50%] text-align text-white pl-[210px] sm:pl-[430px] leading-[20px]" onClick={props.handleClose}><AiOutlineClose className='font-bold'/></span>
        {props.content}

        </div>
        
      </div>
    </div>
     </div>
  )
}

export default Popup