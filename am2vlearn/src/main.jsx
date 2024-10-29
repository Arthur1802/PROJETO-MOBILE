import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { CounterHtmlContextProvider } from './context/CounterHtmlContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterHtmlContextProvider>
        <App /> 
    </CounterHtmlContextProvider>
  </StrictMode>,
)
