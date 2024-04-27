import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar' 
import bg from '../img/bg.png' 


const Home = () => {

  return (
    
    <div className=' align-center justify-center text-white my-auto bg-[#283431] mx-auto leading-6 sm:leading-7'>
       <Navbar />
       
      
        <div className=' mx-auto max-w-[310px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px]'>
        <h1 className='text-2xl pt-10 sm:pt-32 sm:text-4xl max-w-[300px] sm:max-w-[600px] font-bold text-center mx-auto'>Find out if you will make a great Designer or Developer</h1>
        <div className='grid sm:grid-cols-2 py-3'>
          <div className='border-2 rounded-xl px-3 p-2 mt-3 sm:mt-3 sm:m-2 max-w-[300px] sm:max-w-full'>
        <p className='mt-1 text-[12px] font-[500] sm:text-[17px] mx-auto'>In this guide, we will talk about Design and Development. 
        </p>
        <p className='text-[12px] sm:text-[14px] md:text-[15px] font-[200] mt-2'> Gve me the opportunity to show you how enjoyable and empowering choosing a career in tech can be.
         Starting a career can be very hard, especially if you are going into a rapid evolving industry like tech. It can be difficult to do it alone, I'm here to assist.
         there's money in tech if you have the right skills. you could land a high paying job in tech in less than 12 months or less!
         so let's find out if you make great designer or developer. My advice, be commited to tech and you will see the best results.
        
        </p>
        </div>
        <div className='border-2 rounded-xl px-3 p-2 mt-3 sm:mt-3 sm:m-2 max-w-[300px] sm:max-w-full'>
        <p className='text-[12px] sm:text-[14px] md:text-[15px] font-[200]'>One more excellent career tip? Start acquiring the skills that will land you dream job.</p>

        <li className=' font-[200] text-[12px] sm:text-[14px] md:text-[15px] mt-2 sm:text[20px] mx-auto'>
        This guide will explain in detail what a Designer (Product, 
        Graphics and UI design) and a Developer (Web and Mobile development) work
        entails
        </li>
        <li className='text-[12px] sm:text-[14px] md:text-[15px] mt-2 sm:text[20px] mx-auto'>This guide will also test you, i.e you will be given a test at the end of Assessment</li>

       
        <div className='mt-16 max-w-[300px] mx-auto'>
          <Link to='e_design'>  <button type='button' className=' mx-auto border-2 rounded-xl my-2 h-10 w-60'><p className='mx-auto'>Design</p></button></Link>
          <Link to='e_development'>   <button type='button' className=' mx-auto border-2 rounded-xl h-10 w-60'><p className='mx-auto'>Development</p> </button></Link>
        </div>

        </div>
        </div>
        <div className='mx-auto max-w-[500px] italic text-[11px] sm:text-[14px] md:text-[15px] leading-4 text-center'>You can Make a lot of money, even if you're new to technology.</div>

     </div>
        {/* <img src={bg} alt='' /> */}
       <Footer />
    </div>
  )
}

export default Home