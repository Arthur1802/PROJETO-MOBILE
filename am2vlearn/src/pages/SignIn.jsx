import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Signin } from '../utils/authentiation.js'
import sm_logo from '../assets/logo/sm_logo_light.svg'
import google_icon from '../assets/icons/google-icon.svg'
import eye_icon from '../assets/icons/eye-icon.svg'
import eye_slash_icon from '../assets/icons/eye-slash-icon.svg'
import arrow_left from '../assets/icons/arrow-left.svg'
import '../styles/pages/LogIn&SignIn.css'

const SignIn = () => {
    const [values, setValues] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmacao: ''
    })

    const [errors, setErrors] = useState({})

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

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const authenticate = () => {
        setErrors(Signin(values))
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
                        <label htmlFor = "inpNome">NOME:</label>
                        <input
                            autoFocus
                            type = "text"
                            name = "nome"
                            id = "inpNome"
                            placeholder = "Insira aqui seu nome"
                            onChange = {handleInput}
                        />
                    </div>
                    {errors.nome && <span>{errors.nome}</span>}
                    <div className = "input-label-cont">
                        <label htmlFor = "inpEmail">EMAIL:</label>
                        <input
                            autoFocus
                            type = "email"
                            name = "email"
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
                            className = "icons"
                            onClick = {() => handleSenha(false)}
                            aria-label = {mostrarSenha ? "Hide password" : "Show password"}
                            role = "button"
                            alt = ""
                        ></img>
                    </div>
                    {errors.senha && <span>{errors.senha}</span>}
                    <div className = "input-label-cont">
                        <label htmlFor = "inpConfirmacao">CONFIRMAR SENHA:</label>
                        <input
                            type = {mostrarConfirmarSenha ? "text" : "password"}
                            name = "confirmacao"
                            id = "inpConfirmacao"
                            placeholder = "Confirme sua senha"
                            onChange = {handleInput}
                        />
                        <img
                            src = {mostrarConfirmarSenha ? eye_icon : eye_slash_icon}
                            className = "icons"
                            onClick = {() => handleSenha(true)}
                            aria-label = {mostrarConfirmarSenha ? "Hide password" : "Show password"}
                            role = "button"
                            alt = ""
                        ></img>
                    </div>
                    {errors.confirmacao && <span>{errors.confirmacao}</span>}
                    <div className = "btn-cont-auth">
                        <button className = "btns azul-claro" id = "btnCriarConta" onClick = {authenticate}>CRIAR CONTA</button>
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
                        <Link className = "btns btn-alternative" to = "/login">ENTRAR</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn