import React, { useState } from 'react'
import '../styles/pages/LogIn&SignIn.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-5fe1b6438c/icons'
// import { faEye, faEyeSlash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import sm_logo from '../assets/logo/sm_logo_light.svg'
import google_icon from '../assets/icons/google-icon.svg'
import eye_icon from '../assets/icons/eye-icon.svg'
import eye_slash_icon from '../assets/icons/eye-slash-icon.svg'
import arrow_left from '../assets/icons/arrow-left.svg'
import { Link } from 'react-router-dom'

const SignIn = () => {
    // const [values, setValues] = useState({
    //     email: '',
    //     senha: ''
    // })

    const [mostrarSenha, setMostrarSenha] = useState(false)
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false)

    const handleSenha = (isConfirm) => {
        if (isConfirm) {
            setMostrarConfirmarSenha(!mostrarConfirmarSenha)
        }

        else {
            setMostrarSenha(!mostrarSenha)
        }
    }

    // const handleInput = (e) => {
    //     setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // }

    return (
        <div>
            <div className = "auth-panel">
                <div className = "arrow-cont">
                    <Link className = "backBtn" to = "/welcome">
                        {/* <i className = "fa-solid fa-arrow-left"></i> */}
                        {/* <FontAwesomeIcon
                            icon = {faArrowLeft}
                        /> */}
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
                        <label htmlFor = "nome-inp">NOME:</label>
                        <input
                            autoFocus
                            type = "text"
                            name = "nome"
                            id = "nome-inp"
                            placeholder = "Insira aqui seu nome"
                            // onChange = {handleInput}
                        />
                    </div>
                    <div className = "input-label-cont">
                        <label htmlFor = "email-inp">EMAIL:</label>
                        <input
                            autoFocus
                            type = "email"
                            name = "email"
                            id = "email-inp"
                            placeholder = "Insira aqui seu e-mail"
                            // onChange = {handleInput}
                        />
                    </div>
                    <div className = "input-label-cont">
                        <label htmlFor = "senha_inp">SENHA:</label>
                        <input
                            type = {mostrarSenha ? "text" : "password"}
                            name = "senha"
                            id = "senha_inp"
                            placeholder = "Insira aqui sua senha"
                            // onChange = {handleInput}
                        />
                        {/* <i
                            className = {`eye-icon fa-solid ${mostrarSenha ? "fa-eye" : "fa-eye-slash"}`}
                            onClick = {() => handleSenha()}
                            aria-label = {mostrarSenha ? "Hide password" : "Show password"}
                            role = "button"
                        ></i> */}
                        {/* <FontAwesomeIcon
                            // icon  = {byPrefixAndName.fas[`${mostrarSenha ? "eye" : "eye-slash"}`]}
                            icon = {mostrarSenha ? faEye : faEyeSlash}
                            className = "eye-icon"
                            onClick = {() => handleSenha(false)}
                            aria-label = {mostrarSenha ? "Hide password" : "Show password"}
                            role = "button"
                        /> */}
                        <img
                            src = {mostrarSenha ? eye_icon : eye_slash_icon}
                            className = "icons"
                            onClick = {() => handleSenha(false)}
                            aria-label = {mostrarSenha ? "Hide password" : "Show password"}
                            role = "button"
                            alt = ""
                        ></img>
                    </div>
                    <div className = "input-label-cont">
                        <label htmlFor = "confirmacao_inp">CONFIRMAR SENHA:</label>
                        <input
                            type = {mostrarConfirmarSenha ? "text" : "password"}
                            name = "confirmacao"
                            id = "confirmacao_inp"
                            placeholder = "Confirme sua senha"
                            // onChange = {handleInput}
                        />
                        {/* <i
                            className = {`eye-icon fa-solid ${mostrarSenha ? "fa-eye" : "fa-eye-slash"}`}
                            onClick = {() => handleSenha()}
                            aria-label = {mostrarSenha ? "Hide password" : "Show password"}
                            role = "button"
                        ></i> */}
                        {/* <FontAwesomeIcon
                            // icon  = {byPrefixAndName.fas[`${mostrarSenha ? "eye" : "eye-slash"}`]}
                            icon = {mostrarConfirmarSenha ? faEye : faEyeSlash}
                            className = "eye-icon"
                            onClick = {() => handleSenha(true)}
                            aria-label = {mostrarConfirmarSenha ? "Hide password" : "Show password"}
                            role = "button"
                        /> */}
                        <img
                            src = {mostrarConfirmarSenha ? eye_icon : eye_slash_icon}
                            className = "icons"
                            onClick = {() => handleSenha(true)}
                            aria-label = {mostrarConfirmarSenha ? "Hide password" : "Show password"}
                            role = "button"
                            alt = ""
                        ></img>
                    </div>
                    <div className = "btn-cont-auth">
                        <Link className = "btns azul-claro" id = "btnLogin" to = "/signin">CRIAR CONTA</Link>
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
                        <Link className = "btns btn-alternative" id = "btnCriarConta" to = "/login">ENTRAR</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn