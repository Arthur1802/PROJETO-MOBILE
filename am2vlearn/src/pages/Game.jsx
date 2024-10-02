import React from 'react'
import html from '../assets/img/html_dark.svg'
import './Game.css'
import Answers from './Answers'

const Game = ({ questao }) => {

  const respostas = [
    {id: 1, resposta: "<p>"},
    {id: 2, resposta: "<para>"},
    {id: 3, resposta: "<paragraph>"},
    {id: 4, resposta: "<div>"},
  ]
  

  let gameQuestion = `<>Lorem, ipsum dolor sit amet.</>` //questao


  return (
    <div className='game-display'>
        <img src={html} alt="" width="80px"/>
        <div className='game-board'>
            <p className='game-question'>
              1. Qual tag é usada para definir um parágrafo em HTML?
            </p>

            <div className='game-example'>
              <pre>
                <code>
                  {gameQuestion}
                </code>
              </pre>
            </div>
            {respostas.map((resposta) => (
              <Answers key={resposta.id} resposta={resposta.resposta}/>
            ))}

        </div>
    </div>
  )
}

export default Game