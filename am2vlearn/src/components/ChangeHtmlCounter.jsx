// 3 - Alterando o Contexto

import { useContext } from 'react';

import { CounterHtmlContext } from '../context/CounterHtmlContext';

import React from 'react'

const ChangeHtmlCounter = () => {

  const { counter, setCounter } = useContext(CounterHtmlContext)

  return (
    <div>
      <button onClick={() => setCounter(counter + 1 )}>Add value to counter</button>
      <button onClick={() => setCounter(counter - 1 )}>Diminuir value to counter</button>
    </div>
  )
}

export default ChangeHtmlCounter