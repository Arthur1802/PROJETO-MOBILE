import React, { useState } from 'react'
import sm_logo from '../assets/sm_logo_light'
import google_icon from '../assets/google_icon'

const LogIn = () => {
    const [values, setValues] = useState({
        credencial: '',
        senha: ''
    })

    const [mostrarSenha, setMostrarSenha] = useState(false)

    return (
        <div>
            <a><i className = "fa-solid fa-arrow-left"></i></a> {/* Botão para voltar para página inicial */}
            <img src = {sm_logo} alt = "Logo"></img>
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
                <i className = {mostrarSenha ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} onClick = {() => setMostrarSenha(!mostrarSenha)}></i>
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
    )
}

export default LogIn