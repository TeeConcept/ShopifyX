import { Result } from 'postcss';
import React, { useState } from 'react'
import firstdev from '../img/firstdev.png'
import emphasis from '../img/emphasis.png'
import contrast from '../img/contrast.png'
const Exercise = () => {

 
        // const [currentState, setCurrentState] = useState(1);
     
     
        // const handleClick = (inputt) => {
        //  if(answer===one)
        //  alert('you have passed');
        // }
     
        const questions = [
         {
             questionText: 'Which of the following options can be used to display every element in these array',
             img: <img src={firstdev} alt='' />,
             answerOptions: [
                 { answerText: 'for(i=0; i < cars; i++)', isCorrect: false },
                 { answerText: '"for(i=0; i < cars.length; i=)"', isCorrect: false },
                 { answerText: "for(i=0; i < cars.length; i++)", isCorrect: true },
                 { answerText: 'None of the above', isCorrect: false },
             ], 
             id: 1,
         },
         {
            questionText: 'The iPhone was created by which company?',
            img: <img src={contrast} alt=''/>,
             answerOptions: [
                 { answerText: 'White-space', isCorrect: false },
                 { answerText: 'Contrast', isCorrect: true },
                 { answerText: 'Proportional', isCorrect: false },
                 { answerText: 'Emphasis', isCorrect: false },
             ],
         },
         {
             questionText: 'The iPhone was created by which company?',
             answerOptions: [
                 { answerText: 'Apple', isCorrect: true },
                 { answerText: 'Intel', isCorrect: false },
                 { answerText: 'Amazon', isCorrect: false },
                 { answerText: 'Microsoft', isCorrect: false },
             ],
         },
         {
             questionText: 'How many Harry Potter books are there?',
             answerOptions: [
                 { answerText: '1', isCorrect: false },
                 { answerText: '4', isCorrect: false },
                 { answerText: '6', isCorrect: false },
                 { answerText: '7', isCorrect: true },
             ],
         },
     ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [Result, setResult] = useState('Res');
    const [firstQuestion, setFirstQuestion] = useState('')

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

    function prevBtn() {
        const prevQuestion = currentQuestion - 1
        setCurrentQuestion(prevQuestion)
    }
    function nextBtn() {
        const nextQuestion = currentQuestion + 1
        setCurrentQuestion(nextQuestion)
    }
    function retake() {
        window.location.reload()
        // setShowScore(false)
        // setScore(score - 4)
        // if (questions.length === 4){
        //     setCurrentQuestion(questions.length - 4)
        // }
    }
    
   

  return (
    <div>
       
       <div className='answer-section'>{questions[currentQuestion].answerOptions.map((answerOption, index) => {
            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
        })}</div>
        

         <div className='testbody'>
       <div className='bg-[#252d4a] m-6 test max-[300px] sm:max-w-[700px] md:max-w-[800px] mx-auto'>
       {showScore ? (
				<div className=' grid grid-rows-2'>
                    { score < 4 ? <p className='mt-2'>Hmm... You are not a failure! Tommy. Retake the test</p> : <p>Congratulations tommy! i think you will make an amazing designer</p> }
                    <div className='flex'> 
                        <button onClick={() => setResult('result')} className='h-10'>See result</button>
                        <button onClick={retake} className='h-10'>Retake the test</button>
                    </div>
                     {Result === 'result' && <p>You scored {score} out of {questions.length}</p>}
				</div>  
         
			) : (
				<>
                <div  className='question-text'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
                        <div className='mx-2 m-2'>{questions[currentQuestion].img}</div>

                        <div className='flex mt-2 mx-2'> 
                        {currentQuestion === 0 ? '' : <button onClick={prevBtn} className='border-0 '>prev</button>}
                        {currentQuestion === 3 ? '' : <button onClick={nextBtn} className='border-0 '>next</button>} 
                        </div>
                </div>

					<div className='answer-section'>
                    <div>{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='my-2' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}</div>
					
                </div>
					
                    
				</>
			)}
       </div>
       </div>
    </div>
  )
}

export default Exercise