import React, { useState } from 'react'
import '../styles/SignIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-5fe1b6438c/icons'
import { faEye, faEyeSlash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import sm_logo from '../assets/sm_logo_light.svg'
import google_icon from '../assets/google_icon.svg'

const SignIn = () => {
    // const [values, setValues] = useState({
    //     email: '',
    //     senha: ''
    // })

    const [mostrarSenha, setMostrarSenha] = useState(false)

    const handleSenha = () => {
        setMostrarSenha(!mostrarSenha)
    }

    // const handleInput = (e) => {
    //     setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // }

    return (
        <div>
            <div className = "auth-panel">
                <div className = "arrow-cont">
                    <a className = "backBtn" href = "/">
                        {/* <i className = "fa-solid fa-arrow-left"></i> */}
                        <FontAwesomeIcon
                            icon = {faArrowLeft}
                        />
                    </a> {/* Botão para voltar para página inicial */}
                </div>
                <div className = "img-cont">
                    <img className = "login-logo" src = {sm_logo} alt = "Logo"></img>
                </div>
                <div className = "form">
                    <div className = "input-label-cont">
                        {/* <label htmlFor = "nome-inp">NOME:</label> */}
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
                        {/* <label htmlFor = "email-inp">EMAIL:</label> */}
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
                        {/* <label htmlFor = "senha_inp">SENHA:</label> */}
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
                        <FontAwesomeIcon
                            // icon  = {byPrefixAndName.fas[`${mostrarSenha ? "eye" : "eye-slash"}`]}
                            icon = {mostrarSenha ? faEye : faEyeSlash}
                            className = "eye-icon"
                            onClick = {() => handleSenha()}
                            aria-label = {mostrarSenha ? "Hide password" : "Show password"}
                            role = "button"
                        />
                    </div>
                    <div className = "input-label-cont">
                        {/* <label htmlFor = "confirmacao_inp">CONFIRMAR SENHA:</label> */}
                        <input
                            type = {isConfirm ? "text" : "password"}
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
                        <FontAwesomeIcon
                            // icon  = {byPrefixAndName.fas[`${mostrarSenha ? "eye" : "eye-slash"}`]}
                            icon = {isConfirm ? faEye : faEyeSlash}
                            className = "eye-icon"
                            onClick = {() => handleSenha()}
                            aria-label = {isConfirm ? "Hide password" : "Show password"}
                            role = "button"
                        />
                    </div>
                    <div className = "btn-cont">
                        <button id = "btnLogin">CRIAR CONTA</button>
                        <button id = "btnLimpar">LIMPAR</button>
                    </div>

                    <div className = "separador"> {/* -------------- OU -------------- */}
                        <span></span> <p>OU</p> <span></span>
                    </div>
                    
                    <div className = "btn-cont">
                        <button className = "btnGoogle">
                            <img className = "" src = {google_icon} alt = ""></img>
                            GOOGLE
                        </button>
                        <button className = "btnCriarConta">ENTRAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn