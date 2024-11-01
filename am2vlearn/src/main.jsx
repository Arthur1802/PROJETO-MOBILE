import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../service-worker.js', { scope: '/' })
    .then(function (reg) {
      console.log('Registro do Service Worker bem sucedido. O escopo de uso é ' + reg.scope)
    }).catch(function (error) {
      console.log('Registro do Service Worker com ' + error)
    })
}