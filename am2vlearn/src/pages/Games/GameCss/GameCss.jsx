import { useEffect, useState } from 'react'

// import { capitalize } from '../../../utils/functions.js'

import PropTypes from 'prop-types'

import './GameCss.css'

// import Answers from './Answers'
import questoesCss from '../../../questoes/dataCss.json'

import correct from '../../../assets/audio/correct.wav'
import wrong from '../../../assets/audio/wrong.wav'

import BackBtn from '../../../components/BackBtn/BackBtn'
import logoLight from '../../../assets/icons/light/css_light.svg'
import logoDark from '../../../assets/icons/dark/css_dark.svg'

const GameCss = ({ option }) => {

  // let [questoesConcluidas, setQuestoesConcluidas] = useState(0)

  // useEffect(() => {
  //   localStorage.setItem(`questoesConcluidas${capitalize(option)}`, JSON.stringify(questoesConcluidas))
  //   window.dispatchEvent(new Event('gamePlayed'))
  // }, [questoesConcluidas, option])

  // const handleCorrectAnswer = () => {
  //   setQuestoesConcluidas(questoesConcluidas =+ 1)
  // }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])

  const theme = localStorage.getItem('theme')

  option = 'css'
  
  let css = theme === 'light' ? logoLight : logoDark

  const questoes = questoesCss[currentQuestion]

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer.isCorrect
    if (isCorrect) {
      setUserAnswers([...userAnswers, { question: currentQuestion, answer: selectedAnswer.resposta, correct: true }])
      setCurrentQuestion(currentQuestion + 1)
      // handleCorrectAnswer()
      new Audio(correct).play()
    } else {
      setUserAnswers([...userAnswers, { question: currentQuestion, answer: selectedAnswer.resposta, correct: false }])
      setCurrentQuestion(currentQuestion + 1)
      new Audio(wrong).play()
    }
  } 

  useEffect(() => {
    const gameBoard = document.getElementById('game-board')
    gameBoard.style.backgroundColor = `var(--${option}-cor)`
  }, [option])


  return (
    <div>
      {currentQuestion < questoesCss.length ? (
        <div className='game-display'>
          <BackBtn />
          <img 
            className="logo"
            src={css}
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
          <h2>Seu score foi de {userAnswers.filter((answer) => answer.correct).length} de {questoesCss.length}</h2>
        </div>
      )}
    </div>
  )
}
GameCss.propTypes = {
  option: PropTypes.string.isRequired,
}

export default GameCss