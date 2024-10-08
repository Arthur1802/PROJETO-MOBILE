import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { Login } from '../utils/auth.js'
import { isAuthenticated, Login, Proceed } from '../../utils/authentication.js'
import sm_logo from '../../assets/logo/sm_logo_light.svg'
import google_icon from '../../assets/icons/google-icon.svg'
import eye_icon from '../../assets/icons/eye-icon.svg'
import eye_slash_icon from '../../assets/icons/eye-slash-icon.svg'
import './LogIn&SignIn.css'
import BackBtn from '../../components/BackBtn/BackBtn.jsx'
import ErrorModal from '../../components/ErrorModal/ErrorModal.jsx'

const LogIn = () => {
    const navigate = useNavigate()

    const [values, setValues] = useState({
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

    const authenticate = async () => {
        if (!values.email || !values.senha) {
            setErrors({ email: !values.email ? 'Email é obrigatório' : '', senha: !values.senha ? 'Senha é obrigatória' : '' })
            return
        }
        
        else {
            setErrors(Login(values.email, values.senha))
        }
    }

    if (!errors) {
        alert('Login efetuado com sucesso!')
    }

    const handleProceed = async () => {
        Proceed()
        if (isAuthenticated) {
            alert('Login efetuado com sucesso!')
            navigate('/subjectmenu')
        }

        else {
            alert('Erro ao efetuar login!')
        }
    }

    return (
        <div className = "auth-panel">
            <BackBtn link = {'/'}/>
            <div className = "img-cont">
                <img className = "login-logo" src = {sm_logo} alt = "Logo"></img>
            </div>
            <div className = "form">
                <div className = "input-label-cont">
                    <input
                        autoFocus
                        type = "email"
                        name = "credencial"
                        placeholder = "Insira aqui seu e-mail"
                        onChange = {handleInput}
                    />
                </div>
                {errors.email && <span className = "errors">{errors.email}</span>}
                <div className = "input-label-cont">
                    <div className = "input-cont">
                    <input
                            type = {mostrarSenha ? "text" : "password"}
                            name = "senha"
                            placeholder = "Insira aqui sua senha"
                            onChange = {handleInput}
                        />
                        <div className = "eye-cont">
                            <img 
                                src = {mostrarSenha ? eye_icon : eye_slash_icon}
                                alt = ""
                                className = "icons eye-icon"
                                onClick = {() => handleSenha()}
                            ></img>
                        </div>
                    </div>
                </div>
                {errors.senha && <span className = "errors">{errors.senha}</span>}
                <div className = "btn-cont-auth">
                    <button className = "btns azul-claro" id = "btnLogin" onClick = {authenticate}>ENTRAR</button>
                </div>

                <div className = "separador">
                    <span>OU</span>
                </div>
                
                <div className = "btn-cont-auth">
                    <button className = "btns btn-alternative" id = "btnGoogle" onClick = {handleProceed}>
                        <img
                            className = "icons google-icon"
                            src = {google_icon}
                            alt = ""
                        ></img>
                        GOOGLE
                    </button>
                    <Link className = "btns laranja" to = "/signin">CRIAR CONTA</Link>
                </div>
            </div>
            {errors && <ErrorModal message = {errors.login} />}
        </div>
    )
}

export default LogIn