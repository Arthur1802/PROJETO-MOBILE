import React, { useState } from 'react'
import './frontend/styles/App.css'
import Login from './frontend/pages/LogIn'
import Home from './frontend/pages/Home'
import Welcome from './frontend/pages/Welcome'

const App = () => {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <div>
      {/* <BotaoTema/> */}
      {/* {isLogged ? <Home/> : <Welcome setIsLogged = {setIsLogged, theme}/>} */}
      <Login />
    </div>
  )
}

export default App