import React from 'react' // Adicionar o { useState }
import './styles/App.css'
import Welcome from './pages/Welcome'

const App = () => {
  // const [isLogged, setIsLogged] = useState(false)

  // const preferencia = window.matchMedia('(prefers-color-scheme: dark)').matches // Adicionar o tema preferido
  // const [tema, setTema] = useLocalStorage('tema', preferencia) // Adicionar o useLocalStorage (npm install use-local-storage)

  

  return (
    // <div data-theme = {tema ? 'dark' : 'light'}>
    <div>
      {/* <AlternaTema
        isChecked = {tema}
        hendleChange = {() => setTema(!tema)}
      /> */}
      {/* {isLogged ? <Home/> : <Welcome setIsLogged = {setIsLogged, theme}/>} */}
      <Welcome />
    </div>
  )
}

export default App