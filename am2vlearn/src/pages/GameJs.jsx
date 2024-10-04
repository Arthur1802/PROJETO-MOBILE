import React, { useEffect } from 'react'
import '../styles/pages/Game.css'
// import Answers from './Answers'

const Game = ({ option, questao }) => {
  const tema = 'light'
  option = 'html'
  
  let html = require(`../assets/icons/${option}_${tema}.svg`)

  const respostas = [
    {id: 1, resposta: "<p>"},
    {id: 2, resposta: "<para>"},
    {id: 3, resposta: "<paragraph>"},
    {id: 4, resposta: "<div>"},
  ]
  
  let gameQuestion = `<>Lorem, ipsum dolor sit amet.</>` //questao

  useEffect(() => {
    const gameBoard = document.getElementById('game-board')
    gameBoard.style.backgroundColor = `var(--${option}-cor)`
  }, [option])


  return (
    <div className = 'game-display'>
        <img 
          className = "logo"
          src = {html}
          alt = {option}
        />
        <div className = 'game-board' id = "game-board">
            <p className = 'game-question'>
              1. Qual tag é usada para definir um parágrafo em HTML?
            </p>

            <div className = 'game-example'>
              <pre>
                <code>
                  {gameQuestion}
                </code>
              </pre>
            </div>
            {respostas.map((resposta) => (
              // <Answers key = {resposta.id} resposta = {resposta.resposta}/>
              <button key = {resposta} className = 'game-answer-btns poppins-semibold'>{resposta.resposta}</button>
            ))}

        </div>
    </div>
  )
}

export default Game