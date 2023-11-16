import React, { useState, useEffect } from 'react';
import '../styles/App.module.css';

const EngModal = () => {
 const allQuestions = [
    {
      question: 'Who is the genius inventor in the story?',
      choices: [' A. Daedalus', ' B. Icarus', ' C. King Minos of Crete', ' D. Paciphae'],
      correctAnswer: 0,
    },
    {
      question: 'Who cursed Pasiphae to fall in love with the king\'s most prized bull?',
      choices: [' A. Daedalus', ' B. King Minos', ' C. Poseidon', ' D. Zeus'],
      correctAnswer: 2,
    },
    {
      question: 'What did Daedalus create to escape the tower?',
      choices: [' A. A Labyrinth', ' B. A life-like bull', ' C. A pair of giant wings made from wax and feathers', ' D. A ship with a mast for people to manipulate the wind when traveling in waters'],
      correctAnswer: 2,
    },
 ];

 const [currentQuestionE, setCurrentQuestionE] = useState(0);
 const [answersE, setAnswersE] = useState([]);
 const [correctAnswersE, setCorrectAnswersE] = useState(0);

 const handleAnswerChange = (e) => {
    const answerIndex = parseInt(e.target.value);
    const updatedAnswers = [...answersE];
    updatedAnswers[currentQuestionE] = answerIndex;
    setAnswersE(updatedAnswers);
 };

 const checkAnswers = () => {
  let correct = 0;
  for (let i = 0; i < allQuestions.length; i++) {
    if (answersE[i] === allQuestions[i].correctAnswer) {
      correct++;
    }
  }
  setCorrectAnswersE(correct);
};

 const handleNextQuestion = () => {
  if (currentQuestionE < allQuestions.length - 1) {
     setCurrentQuestionE(currentQuestionE + 1);
  } else if (currentQuestionE === allQuestions.length - 1) {
     const correct = checkAnswers();
     setCorrectAnswersE(correct);
 
     // Display quiz results
     const resultDiv = document.createElement('div');
     resultDiv.className = 'result';
     resultDiv.textContent = `Your final score is: ${correctAnswersE} correct answers out of ${allQuestions.length}`;
     document.getElementById('quiz').appendChild(resultDiv);
 
     // Disable "Next Question" button
     const nextButton = document.querySelector('.button-container button:last-child');
     nextButton.disabled = true;
  }
 };

 const handlePrevQuestion = () => {
    if (currentQuestionE > 0)
      setCurrentQuestionE(currentQuestionE - 1);
 };

 const handleRestartQuiz = () => {
    setCurrentQuestionE(0);
    setAnswersE([]);
    setCorrectAnswersE(0);
 };

  return (
    <div className="container mx-auto py-20" id="quiz"  style={{ marginBottom: '-80px'}}>
            <p className="text-gray-500 text-2xl font-medium uppercase my-3">
          Questions
      </p>
      <br/>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
      English - Questions
      </p>
   
      {allQuestions.length > 0 && (
        <div className="quiz-container">
          {currentQuestionE < allQuestions.length && (
            <div className="question">
              <p className="question-text">{allQuestions[currentQuestionE].question}</p>

              <br/>
              
              <ul className="answer-choices">
                {allQuestions[currentQuestionE].choices.map((choice, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      name="answer"
                      value={index}
                      onChange={handleAnswerChange}
                    />
                    <label>{choice}</label>
                  </li>
                ))}
              </ul>
                  <br/>
              <div className="button-container">
                {currentQuestionE > 0 && ( 
                  <>
                  <button onClick={handlePrevQuestion}>Previous Question</button>  { ' | ' }
                  </>
                )}
                
                <button onClick={handleNextQuestion}>
                  {currentQuestionE === allQuestions.length - 1
                    ? 'Finish Quiz'
                    : 'Next Question'}
                </button>
              </div>
            </div>
          )}

          {currentQuestionE === allQuestions.length && (
            <div className="result">
              <p>
                Your final score is: {correctAnswersE} correct answers out of {allQuestions.length}
              </p>
              <button onClick={handleRestartQuiz}>Restart Quiz</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EngModal;
      
   