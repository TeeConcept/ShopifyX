import React, { useRef, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import gooddesign from '../img/gooddesign.png'
import unfinish from '../img/unfinished.png'
import norule from '../img/norule.png'
import Popup from '../onepage/Popup'
import { Link } from 'react-router-dom'

const Design = () => {
  const inputRef = useRef(null)
  const [popUp, setPopUp] = useState(false);

  const handlePopup = () => {
      setPopUp(!popUp)
  }


  
  return (
    <div className='bg-[#04220C]'>
      <Navbar className='z-50'/>
      {popUp && <Popup
        content={<>
            <b className='text-[15px] sm:text-[20px] text-white font-[600]'>Goodluck!</b>
            <p className='text-[10px] sm:text-[15px] text-white py-[3px] sm:py-3'>Part of a learning process requires a commitment, it indicates how determined and dedicated you are to this things that matters</p>
            <p className='text-[10px] sm:text-[15px] text-white'>Proceed to test with 500 naira only</p>
            <a href='https://paystack.com/pay/31vnbgcdxt' ><button className='mt-[5px] sm:mt-[40px] w-24 sm:w-72 mx-auto border-white bg-[#04220C] border-[2px]'><p className='mx-auto text-[12px] sm:text-[15px]'>Proceed</p></button></a>
          </>}
          handleClose={handlePopup}/>}
      <div>
    <div className=' max-w-[290px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px] mx-auto text-[#ffffff]'>
      
      <h2 className='text-[20px] sm:text-4xl pt-10 sm:pt-20 font-[500] opacity-[0.9]'>Alright! let's talk about the principle of design</h2>
      <p className='text-[10px] sm:text-[14px] md:text-[16px] mt-2 font-[300] opacity-[0.7]'>the principles of design are the rules a 
        designer should follow to create an effective and attractive composition.</p>
        <p className='text-[10px] sm:text-[14px] md:text-[16px] mt-2 font-[300] opacity-[0.8]'><span className='font-[500]'>"Principles are not constraints".</span> Principles exist because we've seen and observed
        something work well consistently overtime and concluded that it must be important to follow.
        </p>
        <h3 className='text-[10px] sm:text-[14px] md:text-[16px] mt-2 font-[500] opacity-[0.7]'>Fundamental principles of Design:</h3>
        <div className='text-[10px] sm:text-[14px] md:text-[16px] mt-1 font-[300] opacity-[0.7]'>
          <li>Emphasis</li>
          <li>Balance</li>
          <li>Alignment</li>
          <li>Contrast</li>
          <li>Repetition</li>
          <li>Proportion</li>
          <li>Movement and White Space</li>
        </div>
      
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 opacity-[0.9]'>
       <div  className='py-3 text-[12px] leading-5 bg-[#283431] border-2 rounded-xl my-3 mx-2 p-4'>
       <h2 className='text-[14px] md:text-[16px] py-2 font-[500]'>Emphasis</h2>
        <p className='text-[10px] sm:text-[14px] md:text-[15px] font-[100]'>Suppose you are designing a concert poster. 
          What is the first thing that my audience needs to know,
           you should ask yourself?</p>
           <p className='text-[10px] sm:text-[14px] md:text-[15px] font-[100]'>Allow your mind to arrange the data before arranging your
             design in a way that conveys that arrangement. The band's 
             name should be prominently shown on the poster if it is the 
             most important piece of information. 
            You might also type it in the biggest, boldest font.
            </p>
            </div>

            <div  className='py-3 text-[10px] sm:text-[14px] md:text-[15px] font-[100] leading-5 bg-[#283431] border-2 rounded-xl my-3 mx-2 p-4' >
            <h2 className='text-[14px] sm:text-[16px] font-[500] py-2'>Balance & Alignment</h2>
            <p>You should always keep in mind that each element you place on a website
             has a weight. Color, size, or texture can all contribute to weight. You
              wouldn't put all your furniture in one corner of a room, and the same 
              rule applies to composition: don't jam all your heavy pieces into one spot
              . Your audience will feel as if their eye is slipping off the page if there
               is an imbalance. type st.</p>
               <p>By placing equally weighted components on either side of a center line,
                 symmetrical design achieves balance.</p>
               <p>Asymmetrical design, on the other hand, uses opposing weights to produce 
                an uneven composition that nonetheless maintains equilibrium 
                (for example, by contrasting one huge element with multiple smaller parts) <a href='https://99designs.com/blog/tips/principles-of-design/'>Read more..</a>.</p>
        </div>
        <div className='py-3 text-[10px] sm:text-[14px] md:text-[15px] font-[100] bg-[#283431] leading-5 border-2 rounded-xl my-3 mx-2 p-4' >
        <h2 className='text-[14px] sm:text-[16px] font-[500] py-2 '>Contrast</h2>
          <p>When someone says a design "pops," they're referring to contrast.
             It stands out from the page and stays in your mind. Contrast makes the
             differences and spaces between your design's pieces stand out.</p>
             <p>Understanding contrast is crucial if you want to work with type 
              since it shows that your type's weight and size are balanced.
               If everything is bold, 
              how will your readers determine what is most important?</p>
        </div>
        <div  className='py-3 text-[10px] sm:text-[14px] md:text-[15px] font-[100] bg-[#283431] leading-5 border-2 rounded-xl my-3 mx-2 p-4' >
        <h2 className='text-[14px] sm:text-[16px] font-[500] py-2 '>Repetition</h2>
          <p>Repeated elements reinforce and unify a design, it is commonly believed.
             Your band's poster can seem incorrect if it has just one line of blue italic
              sans-serif type. Three things in blue italic sans-serif gives you a motif
             and puts you back in charge of your design if they are all in that style.</p>
        </div>
        <div  className='py-3 text-[10px] sm:text-[14px] md:text-[15px] font-[100] bg-[#283431] leading-5 border-2 rounded-xl my-3 mx-2 p-4' >
        <h2 className='text-[14px] sm:text-[16px] font-[500] py-2'>Proportional</h2>
          <p>The visual weight and size of components in a composition, as well as their
             relationship to one another, is known as proportion.</p>
             <p>Only when all of your design's components are accurately scaled and
               properly positioned can proportion be attained. When
               alignment, balance, and contrast are mastered, proportion should naturally follow.</p>
        </div>
        <div  className='py-3 text-[10px] sm:text-[14px] md:text-[15px] font-[100] bg-[#283431] leading-5 border-2 rounded-xl my-3 mx-2 p-4' >
        <h2 className='text-[14px] sm:text-[16px] font-[500] py-2 '>Movement</h2>
          <p>Controlling the composition's elements will help you effectively convey your message
             to your audience and guide the viewer's eye from one to the next.</p>
             <p>Movement creates the story or the narrative of your work: a band is playing, it’s at this location, it’s at this time, here’s how you get tickets. The
               elements above—especially balance, alignment, and contrast—will
               work towards that goal, but without proper movement, your design will be DOA.</p>
        </div>
        <div  className='py-3 text-[10px] sm:text-[14px] md:text-[15px] font-[100] bg-[#283431] leading-5 border-2 rounded-xl my-3 mx-2 p-4'>
        <h2 className='text-[16px] font-[500] py-2 '>White Space</h2>
          <p>The vacant area on the page surrounding the components of your composition is known as white space.</p>
          <p>White space establishes hierarchy and order. Having a lot of white space around anything signals
             importance and luxury to our brains. It is indicating to our eyes that objects in one area are organized differently from objects in another.</p>
        </div>
        </div>
        <div  className='py-3 text-[10px] sm:text-[14px] md:text-[16px] font-[300] opacity-[0.7]'>
          <p>A design doesn’t have to strictly follow these rules to be “good.” Some absolutely mind-blowing designs ignore one or more of the principles of
             design in order to create an eye-catching and effective work.</p>
             <img className='drop-shadow-md h-[280px] sm:h-[500px] pt-4' src={norule} alt='' />
             <p className='pb-4 text-[5px] sm:text-[9px]'>The Bed Moved by Rebecca Schiff. Designed by Janet Hansen for Knopf</p>


             <p>The movement and alignment rules are both obviously broken by the design. But! Your eye is quickly drawn to the book's title and author due to the confident use of a bright, contrasting color palette and a repeated structure by the designer.

             The essential information is conveyed. This design is so novel and satisfying because of that unexpected, fleeting moment of little perplexity.</p>
        </div>
        <div>
        <p className='py-3 text-[10px] sm:text-[14px] md:text-[16px] font-[300] opacity-[0.7]'>So let's put this into use; You are given a tack to design a flyer displaying
        time, date, place and name of the event:</p>
        <ul className='text-[10px] sm:text-[14px] md:text-[16px] font-[300] opacity-[0.7]'>
          <li>Name of event: Designer's Hang Out</li>
          <li>Organisers: Spheres' Consult</li>
          <li>Place: the Doom, Akure</li>
          <li>Date: 17th, April 2020</li>
          <li>Time: 9:00 am</li>
          <li>gate fee: $50</li>
        </ul>
        <p className='mt-4 text-[12px] sm:text-[14px] md:text-[17px]'>Result:</p>
        <div className='grid sm:grid-cols-2'>
        <img className='drop-shadow-md h-[200px] sm:h-[300px] z-10 py-4' src={unfinish} alt='' />
        <img className='drop-shadow-md h-[200px] sm:h-[300px] z-10 py-4' src={gooddesign} alt='' />
        </div>
        <p className='text-[11px] sm:text-[14px] md:text-[16px] pb-6'>You can decide to add any background to your design, but pay attention to the 
          "Contrast"; if your background is not properly chosen, it can obscure the information in your design. 
        </p>
        <p className='text-[11px] sm:text-[14px] md:text-[16px] pb-6' >Alright! i hope you Understand all that has been said and done? however these are just fundamentals of design, you need to research and practice more to become a good desgner.
         I have a test for you, this is just a step to start your career if you have not started, i am certain you will make a great Graphic designer!
        </p>
       
        </div>

        </div>

        <Link to='/designtest' ><button className='max-w-[200px] sm:max-w-[400px] mx-auto'><p className='mx-auto'>Take test</p></button></Link>
        </div>
        <Footer />
    </div>
  )
}

export default Design