import React from 'react'
import '../styles/Welcome.css'
import lg_logo from '../assets/lg_logo_light.svg'

const Welcome = () => {
    return (
        <div className = "welcome-panel">
            <div className = "img-cont">
                <img className = "welcome-logo" src = {lg_logo} alt = "Logo"></img>
            </div>
            <div className = "btn-cont">
                <button id = "btnLogin">ENTRAR</button>
                <button className = "btnCriarConta">CRIAR CONTA</button>
            </div>
        </div>
    )
}

export default Welcome