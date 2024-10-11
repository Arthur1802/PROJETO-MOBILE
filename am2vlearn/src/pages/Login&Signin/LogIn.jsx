import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Login, LoginWithGoogle } from '../../utils/auth.js'
import { useAuth } from '../../utils/contexts/authContext'
import sm_logo from '../../assets/logo/sm_logo_light.svg'
import google_icon from '../../assets/icons/google-icon.svg'
import eye_icon from '../../assets/icons/eye-icon.svg'
import eye_slash_icon from '../../assets/icons/eye-slash-icon.svg'
import './LogIn&SignIn.css'
import BackBtn from '../../components/BackBtn/BackBtn.jsx'
import ErrorModal from '../../components/ErrorModal/ErrorModal.jsx'

const LogIn = () => {
    const { userLoggedIn } = useAuth()

    const [values, setValues] = useState({
        email: '',
        senha: ''
    })

    const [isSigningIn, setIsSigningIn] = useState(false)

    const [errors, setErrors] = useState({})

    const [mostrarSenha, setMostrarSenha] = useState(false)

    const handleSenha = () => {
        setMostrarSenha(!mostrarSenha)                     
    }

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!values.email || !values.senha) {
            if (!isSigningIn) {
                setIsSigningIn(true)
                await setErrors(LogIn(values.email, values.senha))
            }
            setErrors({ email: !values.email ? 'Email é obrigatório' : '', senha: !values.senha ? 'Senha é obrigatória' : '' })
            return
        }
        
        else {
            setErrors(Login(values.email, values.senha))
        }
    }

    const authenticateGoogle = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            setErrors(LoginWithGoogle())
        }
    }

    if (!errors) {
        alert('Login efetuado com sucesso!')
    }

    // const handleProceed = async () => {
    //     Proceed()
    //     if (isAuthenticated) {
    //         alert('Login efetuado com sucesso!')
    //         navigate('/subjectmenu')
    //     }

    //     else {
    //         alert('Erro ao efetuar login!')
    //     }
    // }

    return (
        <>
            {userLoggedIn && (<Navigate to = "/subjectmenu" />)}
            <div className = "auth-panel" data-aos = "fade-up">
                <BackBtn link = {'/'}/>
                <div className = "img-cont">
                    <img className = "login-logo" src = {sm_logo} alt = "Logo"></img>
                </div>
                <form className = "form" onSubmit = {onSubmit}>
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
                        <button className = "btns azul-claro" id = "btnLogin" type = "sumit">ENTRAR</button>
                    </div>

                    <div className = "separador">
                        <span>OU</span>
                    </div>
                    
                    <div className = "btn-cont-auth">
                        <button className = "btns btn-alternative" id = "btnGoogle" onClick = {authenticateGoogle}>
                            <img
                                className = "icons google-icon"
                                src = {google_icon}
                                alt = ""
                            ></img>
                            GOOGLE
                        </button>
                        <Link className = "btns laranja" to = "/signin">CRIAR CONTA</Link>
                    </div>
                </form>
                {errors && <ErrorModal message = {errors.login} />}
            </div>
        </>
    )
}

export default LogIn