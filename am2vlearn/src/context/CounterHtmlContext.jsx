// 1 - Criar Context

import { createContext, useState } from 'react'

export const CounterHtmlContext = createContext()

// 2 - Criar Provider
export const CounterHtmlContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)

  return (
    <CounterHtmlContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterHtmlContext.Provider>
  )
}