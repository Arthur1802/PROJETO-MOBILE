import React, { useState } from 'react'
import './styles/App.css'
import lg_logo from './assets/lg_logo_light'
import Login from './pages/LogIn'
import Home from './pages/Home'
import Welcome from './pages/Welcome'

const App = () => {
  // const [isLogged, setIsLogged] = useState(false)

  return (
    <div>
      <img src = {lg_logo} alt = "Logo"></img>
      {/* {isLogged ? <Home/> : <Welcome setIsLogged = {setIsLogged, theme}/>} */}
      <Login />
    </div>
  )
}

export default App