import React, { useState } from 'react'
import './styles/App.css'
import Login from './pages/LogIn'
import Welcome from './pages/Welcome'

const App = () => {
  // const [isLogged, setIsLogged] = useState(false)

  return (
    <div>
      {/* {isLogged ? <Home/> : <Welcome setIsLogged = {setIsLogged, theme}/>} */}
      <Login />
    </div>
  )
}

export default App