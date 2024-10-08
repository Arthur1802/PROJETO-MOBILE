import React from 'react'
import './Welcome.css'
import lg_logo from '../../assets/logo/lg_logo_light.svg'
import { Link } from 'react-router-dom'

const Welcome = () => {
    console.log("ESTOU AQUI NA TELA WELCOME")
    return (
        <div className = "welcome-panel">
            <div className = "img-cont">
                <img className = "welcome-logo" src = {lg_logo} alt = "Logo"></img>
            </div>
            <div className = "btn-cont">
                <Link className = "btnsWelcome azul-claro" id = "btnLogin" to = "/login">ENTRAR</Link>
                <Link className = "btnsWelcome laranja" id = "btnCriarConta" to = "/signin">CRIAR CONTA</Link>
            </div>
        </div>
    )
}

export default Welcome