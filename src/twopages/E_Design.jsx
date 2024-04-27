import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Design from './Design'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const E_Design = () => {
  return (
    <div className='text-white bg-[#f9fffa] leading-5 sm:leading-7'>
      <Navbar />
      <div className='grid md:grid-cols-3 max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px] mx-auto'>
    <div className='col-span-2 '>
    <div className='max-w-[163px] sm:max-w-[233px] md:max-w-[297px] h-[30px] sm:h-[35px] bg-black py-2 mt-10 md:my-7'>
        <h2 className='text-[10px] sm:text-[14px] md:text-[18px] p-1 border-2 border-[#fff] font-[500] bg-[#000] absolute text-white w-full max-w-[160px] sm:max-w-[230px] md:max-w-[295px] mx-2'>Alright! let's talk about Design</h2>
      </div>
      <p className='text-[10px] sm:text-[14px] md:text-[15px] m-2 mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[600] text-[#000] bg-white w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1150px] mx-2'>
      The era of design is currently upon us. Millions, if not billions, of people's lives are impacted by the work that graphic, UX, and
       product designers do. This work is innovative, difficult, and well-paid. Growing numbers of businesses
       designers are gaining access to positions at companies that recognize the value of design
       the decision-making process or take the helm as business founders.
      </p>
      <div className='text-[10px] sm:text-[14px] md:text-[15px] m-2 mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[600] text-[#000] bg-white w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1150px] mx-2'>
      <div>
      <p className='text-[14px] sm:text-[16px] md:text-[17px] mt-2 font-[600]'>Graphic Design</p>
      <p className='font-[400]'>Graphic Design is the creation of visual compositions to solve problems and communicate 
         ideas using the priniciples of design.
         It helps you to communicate your ideas in an efficient way. Professionally - designed graphics will 
         influence others to have positive views about your brand, service, or product. It's crucial to understand that the visual representation of your brand 
         can help you stand out from the competitors.</p>
         <p className='font-[400]'>
         People are naturally drawn to those things that appear good and make them feel good. You may dramatically improve your brand's capacity 
         to stand out in the eyes of important decision-makers by making an investment in high-quality graphic design.
         An attractive graphic design effectively communicates your brand's concept. People might not be interested in 
         reading a document that asks them to buy your goods, but they will glance at an image that delivers the same thing. Furthermore,
        graphic design need consistency. To establish trust and make sure that your brand is recognizable, all representations 
        of your brand should have a consistent visual style.
         </p>
      </div>

        <h2 className='text-[14px] sm:text-[16px] md:text-[17px] mt-2 font-[600]'>Product Design</h2>
        <p className='font-[400]'>Product design is the process of critical thinking, creating and iterating products that solve users' problem. It 
         entails developing a functional product that satisfies the needs of a target market while also detecting 
          user issues and coming up with creative solutions to them. To do this, UI and UX design are the two key components. 
          Because they are crucial components in developing a successful user-friendly experience for a certain product, 
          these two acronyms share the word "user" in their names.
        </p>
        <div>
        <h2 className='text-[14px] sm:text-[16px] md:text-[17px] mt-2 font-[600]'>What is UI (User Interface) Design?</h2>
        <p className='font-[400]'>User interaction design, sometimes known as UI, is primarily concerned with the elements 
        of a website or application that users view and interact with (menus and buttons), as well as with color and typography, page or screen layout, animations, and physical actions (clicks and swipes). Graphic designers that specialize in user interface
         (UI) design. Because visual design affects how a user interacts with a product,
            </p>
            <p className='font-[400]'>For instances, a platform for all existing ride-hailing services, which offers users a wide range of 
              features that support seamless comparison and booking of rides from different ride-hailing service providers can be implemented using User Interfac design.
            </p>
            </div>
            <div>
            <h2 className='text-[14px] sm:text-[16px] md:text-[17px] mt-2 font-[600]'>What is UX (User Experience) Design?</h2>
            <p className='font-[400]'>
            UX design is concerned with all aspects of a user's (UX) experience (UX) with digital products,  including the way the product
            makes them think and feel. If you enjoy your time with a
            site or app and you can easily achieve what you want
            with it, that’s thanks to good website design and UX.
            user experience (UX) carry out research, build prototypes, and develop designs based on the findings and feedback from users.
            The aim of the study is to better understand user behavior.
            </p>
            <p>You need to have a solid attention to detail, enjoy problem-solving, and have a solid grasp of human behavior in order to be a successful UX designer.</p>
          <h2 className='text-[14px] sm:text-[16px] md:text-[17px] mt-2 font-[600]'>How Do UI and UX Designs Work Together in a Product?</h2>
          <p className='font-[400]'>User experience and user interface are linked components that work together to define a digital product's usability and functionality.
             As a result, it is now necessary for designers to build the UI and UX design abilities needed to successfully execute and create products.
          </p>
          </div>
          </div>

          
          
          <div className='text-[10px] sm:text-[14px] md:text-[15px] m-2 mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[600] text-[#000] bg-white w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1150px] mx-2'>
            <h2 className='text-[14px] sm:text-[16px] md:text-[17px] mt-2 font-[600]'>UI vs UX: What’s the Difference?</h2>
            <div className='grid grid-cols-2 justify-between'>
            <div className='font-[400] '>
              <h2 className='text-[14px] sm:text-[16px] md:text-[17px] mt-2 font-[600]'>UI design</h2>
              <li>Focuses on a product's presentation and look.</li>
              <li>A product's aesthetic style and structure are taken into consideration.</li>
              <li>uses the necessary icons, layouts, fonts, colors, and actions to emotionally attach a user to a product.</li>
            </div>
            <div className='font-[400]'>
              <h2 className='text-[14px] sm:text-[16px] md:text-[17px] mt-2 font-[600]'>UX design</h2>
              <li>emphasizes a product's usability in particular.</li>
              <li>focuses on how responsive a product is in respect to user needs.</li>
              <li>Facilitates a user to accomplish specific actions.</li>
            </div>
          </div>
          </div>
          <div className='text-[10px] sm:text-[14px] md:text-[15px] m-2 mt-2 rounded-[8px] p-3 border-2 border-[#000] font-[600] text-[#000] bg-white w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1150px] mx-2'>
      <p className='text-[10px] sm:text-[14px] md:text-[15px] mt-2 font-[400]'>
      Even though aesthetics undeniably play a significant role, the finest designers also
       have exceptional senses of color and texture. The most prosperous designers in our field today, however, have a thorough
       understanding of how design impacts business and its worth within the organization.
      </p>
      <p className='mt-2 font-[400]'>
      Unfortunately, design schools frequently do not teach all the skills necessary to succeed in design roles in tech companies,
       including how design affects business, how to collaborate with engineers, how to present your work to non-designers, how to
        conduct customer research and understand customers, how to optimize design to deliver on the business' KPIs (Key Performance Indicators),
         how to evaluate the performance of a design, etc.
        In my opinion, we should aim to provide better resources to teach design that goes beyond aesthetics as we as an industry are
        very interested in having more highly competent designers.
      </p>
      </div>
      </div>
      <div className='p-2 mx-4 md:max-h-[600px] sm:mt-[90px] border-2 border-black text-black rounded-[10px] max-w-[260px] sm:max-w-[350px]'>
        
        <p className='font-[500] text-[10px] sm:text-[14px] md:text-[15px]'>
            Product designer, graphic designer and UI/UX designer jobs
            are some of the most in-demand roles in recent times
        </p>
        <div className='grid grid-rows-5 text-[10px]  py-3 sm:text-[14px] md:text-[15px]'>
            <div className='flex justify-between font-[600] bg-[#cdcdcd]'>
                <p>Job role</p>
                <p>average salary</p>
            </div>
            <div className='flex justify-between bg-[#e4e4e4]'>
                <p>Product designer</p>
                <p>-</p>
                <p>#500,000</p>
            </div>
            <div className='flex justify-between '>
                <p>Graphic designer</p>
                <p>-</p>
                <p>#400,000</p>
            </div>
            <div className='flex justify-between bg-[#e4e4e4]'>
                <p>UI/UX designer</p>
                <p>-</p>
                <p>#400,000</p>
            </div>
            <div className='flex justify-between'>
                <p>Product manager</p>
                <p>-</p>
                <p>#700,000</p>
            </div>
            <div className='flex justify-between bg-[#e4e4e4]'>
                <p>Brand identity designer</p>
                <p>-</p>
                <p>#500,000</p>
            </div>
        </div>
        <p className='font-[500] italic text-[10px] sm:text-[14px] md:text-[15px]'> the median salary for these roles in the
            in United States is $60,000 - $ 115,000 per year.  And as of August 2022, there were over 25,000 open product/UIUX designer
            jobs across the United States on Indeed.com  
        </p>
        <div className='text-[9px] sm:text-[13px] leading-5 font-[500]'>
        <p className='mt-2 font-[600] text-[10px] sm:text-[15px] '>Reference:</p>
        
        <a href='https://skillcrush.com/blog/what-do-ux-designers-do/'>skillcrush.com</a><br/>
        <a href='https://99designs.com/blog/tips/principles-of-design/'>99designs.com</a><br/>
        <a href='https://thinkchrysalis.com/blog/graphic-design/what-makes-graphic-design-important/#:~:text=Graphic%20design%20is%20an%20important,investing%20in%20graphic%20design%20services.&text=Good%20design%20makes%20you%20look%20good.'>thinkchrysalis.com</a>
        <p>'Solving Product Design Exercises Questions Answers'  A book - by Artiom Dashinsky</p>
        </div>
        </div>
        </div>
       
      <div className='py-2'>
      <div className='text-black max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px] mx-auto'>
        <p className='text-[10px] sm:text-[14px] md:text-[15px]'>Now, let's take some lessons. Pay close attention to every information on the next page</p>
      </div>
      <Link to="/design" > <button className='bg-[#020e05] hover:bg-[#020e05] my-5 mb-5 h-[40px] md:h-[60px] rounded-[30px] max-w-[200px] sm:max-w-[400px] md:max-w-[750px] mx-auto text-center text-[11px] sm:text-[14px] md:text-[15px]'><p className='text-center mx-auto'>Take Graphic Design Assessment</p></button></Link>
      <Link to="/product"> <button className='bg-[#020e05] hover:bg-[#020e05] my-5 mb-5 h-[40px] md:h-[60px] rounded-[30px] max-w-[200px] sm:max-w-[400px] md:max-w-[750px] mx-auto text-center text-[11px] sm:text-[14px] md:text-[15px]'><p className='text-center mx-auto'>Take Product Design Assessment</p></button></Link>
      </div>
      <Footer />
    </div>
  )
}

export default E_Design