import React, { useState } from 'react'
import '../styles/Login.css'
import sm_logo from '../assets/sm_logo_light.svg'
import google_icon from '../assets/google_icon.svg'

const LogIn = () => {
    const [values, setValues] = useState({
        credencial: '',
        senha: ''
    })

    const [mostrarSenha, setMostrarSenha] = useState(false)

    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div>
            <div className = "login-panel">
                <div className = "arrow-cont">
                    <a className = "backBtn"><i className = "fa-solid fa-arrow-left"></i></a> {/* Botão para voltar para página inicial */}
                </div>
                <div className = "img-cont">
                    <img className = "login-logo" src = {sm_logo} alt = "Logo"></img>
                </div>
                <div className = "form">
                    <label for = "cred_inp">CONTA:</label>
                    <input
                        type = "text"
                        name = "credencial"
                        id = "cred_inp"
                        placeholder = "Insira aqui seu e-mail ou seu nome"
                        onChange = {handleInput}
                    />
                    <div className = "senha_cont">
                        <label for = "senha_inp">SENHA:</label>
                        <input
                            type = {mostrarSenha ? "text" : "password"}
                            name = "senha"
                            id = "senha_inp"
                            placeholder = "Insira aqui sua senha"
                            onChange = {handleInput}
                        />
                        <i className = {mostrarSenha ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick = {() => setMostrarSenha(!mostrarSenha)}></i>
                    </div>
                    <button id = "btnLogin">ENTRAR</button>

                    <div className = "separador"> {/* -------------- OU -------------- */}
                        <span></span>
                        <p>OU</p>
                        <span></span>
                    </div>
                    
                    <button className = "btnGoogle">
                        <img src = {google_icon} alt = ""></img>
                        GOOGLE
                    </button>
                    <button className = "btnCriarConta">CRIAR CONTA</button>
                </div>
            </div>
        </div>
    )
}

export default LogIn