import React, { useState } from 'react'
import './styles/App.css'
import Welcome from './pages/Welcome'

const App = () => {
  // const [isLogged, setIsLogged] = useState(false)

  return (
    <div>
      {/* {isLogged ? <Home/> : <Welcome setIsLogged = {setIsLogged, theme}/>} */}
      <Welcome />
    </div>
  )
}

export default App