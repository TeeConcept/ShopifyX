import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import loop from '../img/loop.png'
import Output from '../img/output.png'
import Footer from './Footer'
import Navbar from './Navbar'
import result from '../img/result.png'
import Popup from '../onepage/Popup'

const Development = () => {

  const [answer, setAnswer] = useState('');
  const inputRef = useRef(null)
  const [popUp, setPopUp] = useState(false);

  const handlePopup = () => {
      setPopUp(!popUp)
  }


  return (
    <div className='leading-6 sm:leading-7'>
      <Navbar />
      {popUp && <Popup
        content={<>
            <b className='text-[15px] sm:text-[20px] text-white font-[600]'>Goodluck!</b>
            <p className='text-[10px] sm:text-[15px] text-white py-[3px] sm:py-3'>Part of a learning process requires a commitment, it indicates how determined and dedicated you are to this things that matters</p>
            <p className='text-[10px] sm:text-[15px] text-white'>Proceed to test with 500 naira only</p>
            <a href='https://paystack.com/pay/83y2yoqxsa' ><button className='mt-[5px] sm:mt-[40px] w-24 sm:w-72 mx-auto border-white bg-[#04220C] border-[2px]'><p className='mx-auto text-[12px] sm:text-[15px]'>Proceed</p></button></a>
          </>}
          handleClose={handlePopup}/>}
      
    <div className='max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px] mx-auto'>
     
      <p className='text-[20px] sm:text-4xl pt-10 font-[500]'> Alright! let's take a look at Javascript Loop</p>
    <p className='text-[10px] sm:text-[14px] mt-2'>A situable example! let's say you trying to write a long list of items, in javascript it is called array of items, it will not make sense if you start writing one 
        by one when you could actually use a few lines of code to display it</p>
    <h2 className='text-[14px] sm:text-[16px] mt-5 font-[500]'>Loop</h2>

    <p className='text-[10px] sm:text-[14px]'>Loops can execute a block of code a number of times, let's see an example:</p>

    <img className='w-[230px] sm:w-[250px] md:w-[450px] border-[1px] border[] mt-5' src={loop} alt='' />

    <p className='text-[10px] sm:text-[15px] mt-2 ]'>This might look strange if you are new to programming, <span className='italic leading-5 font-[500]'>A quick explanation: </span>
    <span className='leading-5 font-[600]'> We are trying to list the items in the array of cars... we decided to instruct the computer to display
    "i" such that it begins from 0, increments by 1 and runs through the array to the end. The number of items in the array is 8.
    </span>
    <p className='mt-2'>
     In Javascript, "let" 
        is used to declare a variable which can be re-assigned however, "const" is also used to
         declare a variable which can not be changed through re-assignment. alright, let's see the output of our code</p></p>

    <p className='text-[10px] sm:text-[15px] mt-2'>Output:</p>
    <img className='w-[230px] sm:w-[250px] md:w-[450px] mt-2 border-[1px]' src={Output} alt='' />
  
    {/* <div className='grid grid-cols-4'>{text}</div> */}
    <h2 className='pt-6 text-[10px] sm:text-[14px] md:text-[16px]'>We can also solve some arithmetics. imagine you
     are required to multiply each of the arr's elements by 3:</h2>
    <p className='py-2 text-[10px] sm:text-[14px] md:text-[16px]'>const arr = [3, 4, 5, 6];
    </p>
    <p className='text-[10px] sm:text-[14px] md:text-[16px]'>This is an exercise for you. think and Write the code down somewhere!</p>
    <button onClick={() => setAnswer('answer')} className='rounded-none bg-white text-black hover:bg-black border-[1px] max-w-[100px] sm:max-w-[150px] h-6 sm:h-8 border-black hover:text-white'><p className='mx-auto text-[10px] sm:text-[14px] md:text-[16px] '>See result</p></button>
    { answer === 'answer' && <img className='max-w-[300px]' src={result} alt='' />}
    <p className='py-2 text-[10px] sm:text-[14px] md:text-[16px]'><span>Explanation:</span> in Javascript, strings are written in quotes, for instances, london is written as "london" but integers are written without quotes that explains why the items in the array are without quotes.
    We instructed the computer to start looping from the rear '0' then increments by 1 till the end of the array</p>

    <p className='py-2 text-[10px] sm:text-[14px] md:text-[16px]'> It can be very confusing if you are new to programming but remember practise makes perfect! you will be faced with a lot of challenges, it may not be easy. <span className='font-[600]'> Do not Give up! </span>
      be Committed to learning more and your effort will be crown with success. </p>
    
  <p className='py-2 text-[10px] sm:text-[14px] md:text-[16px] font-[500]'>Alright! i hope you understand all that has been said and done? however these are just basics of programming, you need to research and practise more to become a good developer.
         I have a test for you, this is just a step to start your career if you have not started, i am certain you will make a great developer!</p>
 </div>
 <Link to='/developmenttest' ><button type='button' className='border-2 rounded-none text-black hover:bg-black my-8 h-8 mx-auto max-w-[170px] sm:h-10  sm:max-w-[280px] border-black hover:text-white'><p className='mx-auto text-[14px] md:text-[16px]'>Take Test</p></button></Link>
 <Footer />
 </div>
  )
}

export default Development