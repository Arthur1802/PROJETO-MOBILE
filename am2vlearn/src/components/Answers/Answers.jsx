import React from 'react'

import './Answers.css'

const Answers = ({ resposta }) => {
  return (
          <button className='answer-options'>{resposta}</button>
  )
}

export default Answers