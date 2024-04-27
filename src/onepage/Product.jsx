import React, { useRef, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductExercise from '../components/ProductExercise';
import Popup from './Popup';
import story from '../img/story.png'
import storyone from '../img/storyone.png'
import storytwo from '../img/storytwo.png'


const Product = () => {
    const [name, setName] = useState('')
    const inputRef = useRef(null)
    const [showDiv, setShowDiv] = useState(true)
    const [popUp, setPopUp] = useState(false);

    const handlePopup = () => {
        setPopUp(!popUp)
    }

   function handleClick() {
    setName(inputRef.current.value);
   }
    
        // setShowDiv(false)

  return (
    <div className=' bg-[#04220C]'>
        <Navbar />
        {popUp && <Popup
        content={<>
            <b className='text-[15px] sm:text-[20px] text-white font-[600]'>Goodluck!</b>
            <p className='text-[10px] sm:text-[15px] text-white py-[3px] sm:py-3'>Part of a learning process requires a commitment, it indicates how determined and dedicated you are to this things that matters</p>
            <p className='text-[10px] sm:text-[15px] text-white'>Proceed to test with 500 naira only</p>
            <a href='https://paystack.com/pay/fj4oeh3-fn' ><button className='mt-[5px] sm:mt-[40px] w-24 sm:w-72 mx-auto border-white bg-[#04220C] border-[2px]'><p className='mx-auto text-[12px] sm:text-[15px]'>Proceed</p></button></a>
          </>}
          handleClose={handlePopup}/>}
        <div className='text-[#F9FFFA] max-w-[1000px] mx-auto'>
        <p  className='text-[17px] sm:text-[25px] pt-10 w-full max-w-[290px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[950px] mx-auto'>Alright! let's see how to build a Product</p>
        <div className='mt-3 rounded-[7px] border-[1px] mx-auto max-w-[291px] sm:max-w-[501px] md:max-w-[701px] lg:max-w-[951px] bg-[#020e05] border-[#fff] h-[160px] sm:h-[170px] md:h-[136px] lg:h-[116px]'>
        <p className='text-[10px] sm:text-[14px] md:text-[15px] m-2 mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[500] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[950px] mx-2'>Most designers have a tendency to think visually, 
         we're tempted to start sketching the final product right immediately.
         This strategy will probably result in you developing a product that is
          inappropriate for your target market. The most crucial thing to keep in 
          mind when completing exercises is to follow a process.
          Prior to creating any visual work, it is essential to analyze the issue,
          pose questions, and assess and comprehend the audience.</p>
        </div>
        <div  className='rounded-[7px] border-[1px] mx-auto max-w-[291px] sm:max-w-[501px] md:max-w-[701px] lg:max-w-[951px] bg-[#020e05] border-[#fff] h-[270px] sm:h-[275px] mt-10'>
        <h2 className='text-[10px] sm:text-[14px] md:text-[15px] mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[400] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[950px] mx-2'>Understanding what you're producing, coming up with a solution, and
             determining its success are the high-level components of such a process.</h2>
         <p className='text-[10px] sm:text-[14px] md:text-[15px] top-[325px] sm:top-[299px] mt-0 rounded-[8px] p-3 border-2 border-[#000] font-[400] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[950px] mx-2'>You can complete this process by responding to this questions:</p>
           <p className='text-[10px] sm:text-[14px] md:text-[15px] top-[380px] sm:top-[347px] m-2 mt-0 rounded-[8px] p-3 border-2 border-[#000] font-[400] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[950px] mx-2'>
            <li>Understand your goal... Why am I building this?</li>
            <li>Define the audience... Who am I building it for?</li>
            <li>Understand the customer's context and needs... When and where will it be used?</li>
            <li>List ideas... What am I building?</li>
            <li>Prioritise and choose an idea...How could I measure it?</li>
            <li>Solve: This is the one step that you can't mess up. </li>
            </p>
            </div>
            <div  className='rounded-[7px] border-[1px] mx-auto max-w-[291px] sm:max-w-[501px] md:max-w-[701px] lg:max-w-[951px] bg-[#020e05] border-[#fff] h-[150px] sm:h-[850px] lg:h-[140px] mt-20 sm:mt-10'>
        
         <h2 className='text-[14px] sm:text-[15px] md:text-[17px] mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[600] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[950px] mx-2'>Creating high-fidelity designs</h2>
         <p className='text-[10px] sm:text-[14px] md:text-[15px] top-[650px] sm:top-[599px]0 rounded-[8px] p-3 border-2 border-[#000] font-[400] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[950px] mx-2'>User journeys, wireframe flows, a list of ideas, Any type of
             sketching technique can be utilized to lay the foundation for 
             a high-fidelity solution.
             Here are three methods to get the product design process started: storyboarding,
             task definition, and quick sketches.
       </p>
       </div>


        <div  className='rounded-[7px] border-[1px] mx-auto max-w-[291px] sm:max-w-[501px] md:max-w-[701px] lg:max-w-[951px] bg-[#020e05] border-[#fff] h-[705px] sm:h-[510px] mt-20 sm:mt-10'>
         <p className='text-[10px] sm:text-[14px] md:text-[15px] mx-2 mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[400] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[950px]'>Draw a diagram of the steps your consumer must take to 
            successfully use your product in order to build a storyboard.
            Think about the actions that come before and after the customer uses your 
            product to determine if these steps can also benefit from your product. 
            For instance, the Waze app gives realtime driving directions 
            to commuters, the commuter on a bike would often stop 
            interacting with the app once they reached their location. The commuter 
            must now determine if it is secure to lock their bike outside. Waze may 
            compile information on bike theft
            in various neighborhoods and advise whether it is safe to keep the bike outside.
            </p>
            <p className='text-[10px] sm:text-[14px] md:text-[15px] top-[1020px] sm:top-[860px] rounded-[8px] p-3 border-2 border-[#000] font-[400] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[950px] mx-2'>Finding a solution is of little use if you don't know how to evaluate its 
                effectiveness. Close the loop at this point and specify how to verify the solution. To accomplish 
                it, pose a question to yourself. How would we be able to tell if the solution worked?
            </p>
            <p className='text-[10px] sm:text-[14px] md:text-[15px] top-[1020px] sm:top-[860px] rounded-[8px] p-3 border-2 border-[#000] font-[400] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[950px] mx-2'>A product manager or a data analyst will make the final decision 
                in a genuine product about these factors. But as a product
                 designer, you should be conscious of how crucial these elements are to your work.
             </p>
             <p className='text-[10px] sm:text-[14px] md:text-[15px] top-[1206px] sm:top-[998px] rounded-[8px] p-3 border-2 border-[#000] font-[400] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[950px] mx-2'>Your replies to questions are partially questions.
                The task itself will already have certain inputs that will assist you in 
                responding to parts of the above questions (but typically won't include the How).
                 Here are several variations on the same problem with various 'W' inputs:
                Create a product to facilitate the workflow of freelancers (who).
                Create a web app dashboard (what) to enhance freelancers' workflow (who).
            </p>
            <p className='text-[10px] sm:text-[14px] md:text-[15px] top-[1350px] sm:top-[1110px] rounded-[8px] p-3 border-2 border-[#000] font-[400] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[950px] mx-2'>
            The proportion of contractors and freelancers in the worldwide workforce is rising. 
            Since there isn't a single product available to freelancers to manage client workflow,
             every hour spent running their business equates to less time spent doing what they 
             enjoy and less money made (why). Create a web app dashboard 
            to assist freelancers in managing, tracking, and planning their customer work (what).
            </p>
            </div>

            <div  className='rounded-[7px] border-[1px] mx-auto  max-w-[291px] sm:max-w-[501px] md:max-w-[701px] lg:max-w-[951px] bg-[#020e05] border-[#fff] h-[940px] sm:h-[1100px] md:h-[940px] lg:h-[785px] mt-20 sm:mt-72 md:mt-44'>

                <div className='text-[10px] sm:text-[14px] md:text-[15px] mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[600] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[950px] mx-2'>
                <h2 className='text-[14px] sm:text-[15px] md:text-[17px] mt-2'>Task: Design a kiosk for liquid soap and shampoo refill.</h2>
                <p className='font-[400] text-[10px] mt-2 sm:text-[14px] md:text-[15px]'>This challenge, which combines both physical and digital elements, is well suited for on-site training.</p>
                </div>
                <div className='grid sm:grid-cols-2 w-full max-w-[290px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[950px] font-[400] pb-10 mx-4'>
                <div className='m-2 mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[600] text-[#000] bg-[#f9fffa] '>
                <h2 className='text-[14px] sm:text-[15px] md:text-[17px] mt-2'>Understand your goal (why)</h2> 
                <p className='font-[400] text-[10px] sm:text-[14px] md:text-[15px] mt-2'>For the end user, I believe this product has two key value propositions:
                It is environmentally friendly because refilling eliminates needless and wasteful plastic packaging, reducing its negative effects on the environment.
                It offers excellent value; I presume that soap and shampoo are simple, low-cost products with high margins.</p>
                </div>
                <div className='m-2 top-[1343px] mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[600] text-[#000] bg-[#f9fffa] '>
                    <h2 className='text-[14px] sm:text-[15px] md:text-[17px] mt-2'>Define the audience (Who)</h2>
                    <p className='font-[400] text-[10px] sm:text-[14px] md:text-[15px] mt-2'>As essential goods, shampoo and soap have a large market. Every adult in the world purchases them.
                      urban residents, Millennials, and eco-conscious people.
                      </p>
                </div>
                <div className='m-2 top-[1493px] mt-2 rounded-[8px] p-3 border-2 border-[#000] text-[#000] bg-[#f9fffa] '>
                    <h2 className='text-[14px] sm:text-[15px] md:text-[17px] font-[600] mt-2'>Understand the customer's context and needs(When and Where)</h2>
                     <p className='font-[400] text-[10px] sm:text-[14px]  md:text-[15px] mt-2'>Let's examine the circumstances under which our product will be utilised. As a result of its placement inside supermarkets and convenience stores, the following results:
                        <li>A possible queue</li>
                        <li>It will be indoors</li>
                        <li>There will be sufficient lighting.</li>
                        <li>From a product viewpoint, the user's hands might be occupied with shopping bags; </li>
                        our job is to make sure the kiosk offers a seamless customer experience for meeting this need.</p>
                 </div>
                 <div className='m-2 top-[1543px] mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[600] text-[#000] bg-[#f9fffa] '>
                    <p className='text-[14px] sm:text-[15px] md:text-[17px] mt-2'>List ideas (What) + Step 5: Prioritize and choosean idea</p>
                    <p className='font-[400] text-[10px] mt-2 sm:text-[14px]  md:text-[15px]'>Step 4 and 5 are not essential because we already know the type of product we're creating.</p>
                </div>
                <div className='m-2 top-[1643px] mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[600] text-[#000] bg-[#f9fffa] '>
                    <p className='text-[14px] sm:text-[15px] md:text-[17px] mt-2'>Solve</p>
                    <p className='font-[400] text-[10px] mt-2 sm:text-[14px]  md:text-[15px]'>Let's create a brief storyboard of a consumer using the kiosk.</p>
                </div>
                </div>
                </div>
        </div>

        <div  className='rounded-[7px] border-[1px] mx-auto max-w-[291px] sm:max-w-[501px] md:max-w-[701px] lg:max-w-[951px] bg-[#020e05] border-[#fff] h-[405px] sm:h-[310px] mt-20 sm:mt-10'>
             <div className='mx-2 mt-2 rounded-[8px] border-0 border-[#000] font-[400] text-[#000] w-full max-w-[290px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[950px] grid sm:grid-cols-2'>
             <img className='md:max-w-[450px] w-full rounded-[8px]' src={story} alt='' />
             <img className='md:max-w-[450px] w-full rounded-[8px] mt-2 sm:mt-0' src={storytwo} alt='' />
             </div>
        </div>
        <div  className='rounded-[7px] border-[1px] mx-auto max-w-[291px] sm:max-w-[501px] md:max-w-[701px] lg:max-w-[951px] bg-[#020e05] border-[#fff] h-[180px] md:h-[155px] mt-10 sm:mt-20'>
         
             <p className='text-[10px] sm:text-[14px] md:text-[15px] mx-2 mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[400] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[950px]'> In the first image above is the Storyboard for user journey of refilling soap or shampoo using the kiosk, while the second image illustrate the following:</p>
             <p className='text-[10px] sm:text-[14px] md:text-[15px] mx-2 mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[400] text-[#000] bg-[#f9fffa] w-full max-w-[290px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[950px]'>After completing the payment, the customer would be shown
                 instructions about where to place the bottle and press the “Go” button
                 to start the filling process. A countdown would appear
                 towards the end of the filling process. this image also showned Bottle filling process</p>
            
        </div>

        <div  className='rounded-[7px] border-[1px] mx-auto max-w-[291px] sm:max-w-[501px] md:max-w-[701px] lg:max-w-[951px] bg-[#020e05] border-[#fff] h-[120px] md:h-[95px] mt-20 sm:mt-20'>
         
             <p className='text-[10px] sm:text-[14px] md:text-[15px] mx-2 mt-2 rounded-[8px] p-3 border-2 border-[#000] text-[#000] bg-[#f9fffa] w-full font-[600] max-w-[290px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[950px]'>Alright! i hope you Understand all that has been said and done? however these are just fundamentals of Product design, you need to research and practise more to become a good desgner.
         I have a test for you, this is just a step to start your career if you have not started, i am certain you will make a great Product designer!</p>
             
            
        </div>
        

       
    
        <div className='py-3'>

        <Link to='/producttest'><button className='bg-[#020e05] my-20 sm:my-28 mb-5 h-[60px] rounded-[30px] max-w-[200px] sm:max-w-[400px] md:max-w-[750px] mx-auto text-center'><p className='text-center mx-auto'>Take Assessment</p></button></Link>
        </div>
        <Footer />
    </div>
  )
}

export default Product