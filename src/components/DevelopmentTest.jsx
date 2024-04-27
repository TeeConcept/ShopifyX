import React, { useState } from 'react'
import question from '../img/question.png'
import questionone from '../img/questionone.png'
import questionone_o from '../img/questionone_o.png'
import questionthree from '../img/questionthree.png'
import questionfour from '../img/questionfour.png'
import questio from '../img/questio.png'

const DevelopmentTest = () => {
    const questions = [
        {
            questionText: 'What will be the value of text?',
            img: <img src={question} alt=''/>,
            answerOptions: [
                { answerText: "i will be in japan by february", isCorrect: false },
                { answerText: "i will be in London by may", isCorrect: false },
                { answerText: "i will be in germany by january", isCorrect: true },
                { answerText: 'None of the above', isCorrect: false },
            ], 
            id: 1,
        },
        
        {
           questionText: 'Which of these line of code will give the Output',
           img: <img src={questio} alt=''/>,
            answerOptions: [
                { answerText: `for (let i = 0; i < place.length && month.length; i++)\n\n{
                   output = "i will be in " + place[i] + " by " + month[i];
                  }`, isCorrect: true },
                { answerText: `for (let i = 0; i < (place / month.length); i++)\n{
                    output = "i will be in " + place[i] + " by " + month[i];
                  }`, isCorrect: false },
                { answerText: `for (let i = 0; i < place && month.length; i++)\n{
                    output = "i will be in " + place[i] + " by " + month[i];
                  }`, isCorrect: false },
                { answerText: 'None of the above', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the value of text?',
            img: <img src={questionthree} alt=''/>,
            answerOptions: [
                { answerText: '48', isCorrect: true },
                { answerText: '64', isCorrect: false },
                { answerText: '0', isCorrect: false },
                { answerText: '72', isCorrect: false },
            ],
        },
        {
            questionText: 'which of these options will give a value of 5?',
            img: <img src={questionfour} alt=''/>,
            answerOptions: [
                { answerText: `for (let i = 0; i < arr.length; i++){
                    text = arr[2];
                  }`, isCorrect: true },
                { answerText: `for (let i = 0; i < arr.length; i++){
                    text = arr[3];
                  }`, isCorrect: false },
                { answerText: `for (let i = 0; i < arr.length; i++){
                    text = arr[i];
                  }`, isCorrect: false },
                { answerText: 'None of the above', isCorrect: false },
            ],
            button: <button type='button'>submit</button>
        },
    ];

   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [showScore, setShowScore] = useState(false);
   const [score, setScore] = useState(0);
   const [Result, setResult] = useState('Res');
   
   const [color, setColor] = useState(false)

   const handleAnswerOptionClick = (isCorrect) => {

       if (isCorrect) {
           setScore(score + 1);
       }
    
       const nextQuestion = currentQuestion + 1;
       if (nextQuestion < questions.length) {
           setCurrentQuestion(nextQuestion);
       } else {
           setShowScore(true);
       }

       
   };

   const handleClick = () => {
       const nextQuestion = currentQuestion + 1
       if (nextQuestion < questions.length) {
           setCurrentQuestion(nextQuestion)
       }else {
           setShowScore(true)
       }
   }


   function nextBtn() {
       const nextQuestion = currentQuestion + 1
       setCurrentQuestion(nextQuestion)
   }
   function retake() {
       window.location.reload()
   
   }
   
   
  

 return (
   <div>
   
       

        <div className='testbody'>
        
      <div className='bg-[#252d4a] m-6 test max-[300px] sm:max-w-[700px] md:max-w-[800px] mx-auto'>
    
       <div>
      {showScore ? (
               <div className=' grid grid-rows-2'>
                    { score < 4 ? <p className='mt-2 py-3 text-[12px] sm:text-[14px] md:text-[17px]'>Hmm... You are not a failure! Retake the test</p> : <p className='py-3 text-[12px] sm:text-[14px] md:text-[17px] font-[500]'>Congratulations, I think you'd make a great developer; practice more to become the best version of yourself, and your efforts will be crowned with success.</p> }
                   <div className='flex'> 
                       <button onClick={() => setResult('result')} className='h-10 text-[12px] sm:text-[14px] md:text-[17px]'>See result</button>
                       <button onClick={retake} className='h-10 text-[12px] sm:text-[14px] md:text-[17px]'>Retake the test</button>
                   </div>
                    {Result === 'result' && <p>You scored {score} out of {questions.length}</p>}
               </div>  
        
           ) : (
               <>
               <div  className=''>
               <div>
                       <div className='question-count text-[15px] sm:text-[17px]'>
                           <span>Question {currentQuestion + 1}</span>/{questions.length}
                       </div>
                       <div className='question-text text-[12px] sm:text-[15px]'>{questions[currentQuestion].questionText}</div>
                     
                      
                   </div>

                   <div className='mx-auto grid sm:grid-cols-2'>
                   <div className='mx-2 m-2'>{questions[currentQuestion].img}</div>
                   <div>{questions[currentQuestion].answerOptions.map((answerOption) => (
                           <button className='my-2 text-[12px] sm:text-[14px]' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                       ))}</div>
                       
                   </div>
                   
                   <div className='flex mt-2 mx-2'> 
                       {currentQuestion === 3 ? '' : <button onClick={nextBtn} className='border-0 '><p className='mx-auto'>next</p></button>} 
                   </div>
                   <div onClick={handleClick}>{questions[currentQuestion].button}</div>
               </div>
                   
                   
               </>
           )}
           </div>
           
      </div>
      </div>
   </div>
 )
}


export default DevelopmentTest