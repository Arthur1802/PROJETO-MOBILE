import React from 'react'
import './Welcome.css'
import { useAuth } from '../../utils/contexts/authContext/index'
import { Link, Navigate } from 'react-router-dom'
import lg_logo from '../../assets/logo/lg_logo_light.svg'

const Welcome = () => {
    const { userLoggedIn } = useAuth()
    
    console.log("ESTOU AQUI NA TELA WELCOME")
    return (
        <>
            {userLoggedIn && (<Navigate to = "/home" replace = {true}/>)}
            <div className = "welcome-panel" data-aos = "fade-up">
                <div className = "img-cont">
                    <img className = "welcome-logo" src = {lg_logo} alt = "Logo"></img>
                </div>
                <div className = "btn-cont">
                    <Link className = "btnsWelcome azul-claro" id = "btnLogin" to = "/login">ENTRAR</Link>
                    <Link className = "btnsWelcome laranja" id = "btnCriarConta" to = "/signin">CRIAR CONTA</Link>
                </div>
            </div>
        </>
    )
}

export default Welcome