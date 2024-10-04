import React from 'react'
import '../styles/pages/Game.css'
// import Answers from './Answers'

const Game = ({ questao }) => {
  const tema = 'light'
  
  let html = require(`../assets/icons/grouped_logos_${tema}.svg`)

  const respostas = [
    {id: 1, resposta: "<p>"},
    {id: 2, resposta: "<para>"},
    {id: 3, resposta: "<paragraph>"},
    {id: 4, resposta: "<div>"},
  ]
  
  let gameQuestion = `<>Lorem, ipsum dolor sit amet.</>` //questao

  const gameBoard = document.getElementById('game-board')
  gameBoard.style.backgroundColor = `var(--grouped-logos-cor)`


  return (
    <div className = 'game-display'>
        <img 
          className = "logo"
          src = {html}
          alt = "Todos"
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