import React, { useState, useEffect } from 'react';
import '../styles/App.module.css';

const MoreInfoModal = () => {
  const allQuestions = [
    {
      question: ' Sino ang kuba ng Notre Dame?',
      choices: [' Claude Frollo', ' Phoebus', ' Quasimodo', ' Quasimodo'],
      correctAnswer: 3,
    },
    {
      question: ' Si La Esmeralda ay isang...',
      choices: [' Magaling na mang-aawit', ' Mananayaw', ' Mangangalakal', ' Tagapagluto'],
      correctAnswer: 2,
    },
    {
      question: ' Ano ang naging kapalaran ni La Esmeralda sa dulo ng kuwento?',
      choices: [' Ikinulong dahil sa pagpatay kay Phoebus', ' Nagtagumpay dahil nakamit ang pangarap', ' Namatay dahil sa parusa', ' Namatay dahil sa sakit'],
      correctAnswer: 3,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleAnswerChange = (e) => {
    const answerIndex = parseInt(e.target.value);
    setAnswers([...answers, answerIndex]);
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
    <div className="container mx-auto py-20">
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
        Filipino - Questions
      </p>

      {allQuestions.length > 0 && (
        <div className="quiz-container">
          {currentQuestion < allQuestions.length && (
            <div className="question">
              <p className="question-text">{allQuestions[currentQuestion].question}</p>

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
                  <button onClick={handlePrevQuestion}>Previous Question</button> + { ' | ' }
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