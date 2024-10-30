import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './GameAll.css'
// import Answers from './Answers'
import questoesAll from '../../../questoes/dataAll.json'
import correct from '../../../assets/audio/correct.wav'
import wrong from '../../../assets/audio/wrong.wav'
import BackBtn from '../../../components/BackBtn/BackBtn'

const GameAll = ({ option }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  option = 'grouped_logos'
  const theme = localStorage.getItem('theme')
  
  let all = import(`../../../assets/icons/${theme}/${option}_${theme}.svg`)

  const questoes = questoesAll[currentQuestion];

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer.isCorrect;
    if (isCorrect) {
      setUserAnswers([...userAnswers, { question: currentQuestion, answer: selectedAnswer.resposta, correct: true }]);
      setCurrentQuestion(currentQuestion + 1);
      new Audio(correct).play();
    } else {
      setUserAnswers([...userAnswers, { question: currentQuestion, answer: selectedAnswer.resposta, correct: false }]);
      setCurrentQuestion(currentQuestion + 1);
      new Audio(wrong).play();
    }
  } 

  useEffect(() => {
    const gameBoard = document.getElementById('game-board')
    gameBoard.style.backgroundColor = `var(--${option}-cor)`
  }, [option])


  return (
    <div>
      {currentQuestion < questoesAll.length ? (
        <div className='game-display'>
          <BackBtn />
          <img 
            className="logo"
            src={all}
            alt={option}
          />
          <div className='game-board' id="game-board">
            <p className='game-question'>
              {questoes.pergunta}
            </p>

            <div className='game-example'>
              <pre>
                <code>
                  {questoes.exemplo}
                </code>
              </pre>
            </div>
            {questoes.respostas.map((resposta) => (
              // <Answers key = {resposta.id} resposta = {resposta.resposta}/>
              <button 
                key={resposta.id} 
                className='game-answer-btns poppins-semibold'
                onClick={() => handleAnswer(resposta)}
              >
                {resposta.resposta}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className='end-game'>
          <h1>Parabéns, você concluiu o quiz!</h1>
          <h2>Seu score foi de {userAnswers.filter((answer) => answer.correct).length} de {questoesAll.length}</h2>
        </div>
      )}
    </div>
  )
}
GameAll.propTypes = {
  option: PropTypes.string.isRequired,
}

export default GameAll