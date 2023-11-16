import React, { useState, useEffect } from 'react';
import '../styles/App.module.css';

const MoreInfoModal = () => {
  const allQuestions = [
    {
      question: ' Who is the genius inventor in the story?',
      choices: [' Daedalus', ' Icarus', ' King Minos of Crete', ' Paciphae'],
      correctAnswer: 3,
    },
    {
      question: ' Who cursed Pasiphae to fall inlove to the Kings most prized bull?',
      choices: [' Daedalus', ' Mananayaw', ' Mangangalakal', ' Tagapagluto'],
      correctAnswer: 2,
    },
    {
      question: ' What did Daedalus create to escape the tower? ',
      choices: [' A Labyrinth', ' A life like bull', ' A Pair of Giant wings made from wax and feathers', ' A ship with a mast for people to manipulate the wind when traveling in waters'],
      correctAnswer: 3,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleAnswerChange = (e) => {
    const answerIndex = parseInt(e.target.value);
    setAnswers([...answers, answerIndex]);
  
    useEffect(() => {
      // Remove checkmark from previous answer choices
      const previousAnswerChoices = document.querySelectorAll('.answer-choices input[type="radio"]:checked');
      for (let i = 0; i < previousAnswerChoices.length; i++) {
        previousAnswerChoices[i].checked = false;
      }
    }, [answers]);
  };

  const checkAnswers = () => {
    let correct = 0;
    for (let i = 0; i < allQuestions.length; i++) {
      if (answers[i] === allQuestions[i].correctAnswer) {
        correct++;
      }
    }
    setCorrectAnswers(correct);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion === allQuestions.length - 1) {
      checkAnswers();
  
      // Display quiz results
      const resultDiv = document.createElement('div');
      resultDiv.className = 'result';
      resultDiv.textContent = `Your final score is: ${correctAnswers} correct answers out of ${allQuestions.length}`;
      document.getElementById('quiz').appendChild(resultDiv);
  
      // Disable "Next Question" button
      const nextButton = document.querySelector('.button-container button:last-child');
      nextButton.disabled = true;
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setCorrectAnswers(0);
  };

  return (
    <div className="container mx-auto py-20" style={{ marginBottom: '-80px'}}>
            <p className="text-gray-500 text-2xl font-medium uppercase my-3">
          Questions
      </p>
      <br/>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
      English - Questions
      </p>
   
      {allQuestions.length > 0 && (
        <div className="quiz-container">
          {currentQuestion < allQuestions.length && (
            <div className="question">
              <p className="question-text">{allQuestions[currentQuestion].question}</p>

              <br/>
              
              <ul className="answer-choices">
                {allQuestions[currentQuestion].choices.map((choice, index) => (
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
                {currentQuestion > 0 && (
                  <>
                  <button onClick={handlePrevQuestion}>Previous Question</button>  { ' | ' }
                  </>
                )}
                
                <button onClick={handleNextQuestion}>
                  {currentQuestion === allQuestions.length - 1
                    ? 'Finish Quiz'
                    : 'Next Question'}
                </button>
              </div>
            </div>
          )}

          {currentQuestion === allQuestions.length && (
            <div className="result">
              <p>
                Your final score is: {correctAnswers} correct answers out of {allQuestions.length}
              </p>
              <button onClick={handleRestartQuiz}>Restart Quiz</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MoreInfoModal;
      
   