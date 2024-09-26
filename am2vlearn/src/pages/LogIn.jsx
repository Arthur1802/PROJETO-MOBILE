import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../utils/auth.js'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-5fe1b6438c/icons'
// import { faEye, faEyeSlash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import sm_logo from '../assets/logo/sm_logo_light.svg'
import google_icon from '../assets/icons/google-icon.svg'
import eye_icon from '../assets/icons/eye-icon.svg'
import eye_slash_icon from '../assets/icons/eye-slash-icon.svg'
import arrow_left from '../assets/icons/arrow-left.svg'
import '../styles/pages/LogIn&SignIn.css'

const LogIn = () => {
    const {values, setValues} = useState({
        email: '',
        senha: ''
    })

    const [errors, setErrors] = useState({})

    const [mostrarSenha, setMostrarSenha] = useState(false)

    const handleSenha = () => {
        setMostrarSenha(!mostrarSenha)                     
    }

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const authenticate = (email, senha) => {
        setErrors(Login(values))
    }

    return (
        <div>
            <div className = "auth-panel">
                <div className = "arrow-cont">
                    <Link className = "backBtn" to = "/welcome">
                        <img
                            className = "icons"
                            src = {arrow_left}
                            alt = ""
                        ></img>
                    </Link> {/* Botão para voltar para página inicial */}
                </div>
                <div className = "img-cont">
                    <img className = "login-logo" src = {sm_logo} alt = "Logo"></img>
                </div>
                <div className = "form">
                    <div className = "input-label-cont">
                        <label htmlFor = "inpEmail">EMAIL:</label>
                        <input
                            autoFocus
                            type = "email"
                            name = "credencial"
                            id = "inpEmail"
                            placeholder = "Insira aqui seu e-mail"
                            onChange = {handleInput}
                        />
                    </div>
                    {errors.email && <span>{errors.email}</span>}
                    <div className = "input-label-cont">
                        <label htmlFor = "inpSenha">SENHA:</label>
                        <input
                            type = {mostrarSenha ? "text" : "password"}
                            name = "senha"
                            id = "inpSenha"
                            placeholder = "Insira aqui sua senha"
                            onChange = {handleInput}
                        />
                        <img 
                            src = {mostrarSenha ? eye_icon : eye_slash_icon}
                            alt = ""
                            className = "icons"
                            onClick = {() => handleSenha()}
                        ></img>
                    </div>
                    {errors.senha && <span>{errors.senha}</span>}
                    <div className = "btn-cont-auth">
                        <Link className = "btns azul-claro" id = "btnLogin" to = "/login" onClick = {authenticate(email, senha)}>ENTRAR</Link>
                        <button className = "btns laranja" id = "btnLimpar">LIMPAR</button>
                    </div>

                    <div className = "separador"> {/* -------------- OU -------------- */}
                        <span>OU</span>
                    </div>
                    
                    <div className = "btn-cont-auth">
                        <button className = "btns btn-alternative" id = "btnGoogle">
                            <img
                                className = "icons google-icon"
                                src = {google_icon}
                                alt = ""
                            ></img>
                            GOOGLE
                        </button>
                        <Link className = "btns btn-alternative" to = "/signin">CRIAR CONTA</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn