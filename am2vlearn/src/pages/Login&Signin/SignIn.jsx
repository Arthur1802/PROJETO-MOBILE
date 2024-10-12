import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Signin, SignInWtihGoogle } from '../../utils/auth.js'
import { useAuth } from '../../utils/contexts/authContext'
import sm_logo from '../../assets/logo/sm_logo_light.svg'
import google_icon from '../../assets/icons/google-icon.svg'
import eye_icon from '../../assets/icons/eye-icon.svg'
import eye_slash_icon from '../../assets/icons/eye-slash-icon.svg'
import './LogIn&SignIn.css'
import BackBtn from '../../components/BackBtn/BackBtn.jsx'

const SignIn = () => {
    const { userLoggedIn } = useAuth()

    const [values, setValues] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmacao: ''
    })

    const [isSigningIn, setIsSigningIn] = useState(false)

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

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            await setErrors(Signin(values.nome, values.email, values.senha))
        }
    }

    const SignInWitGoogle = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            setErrors(SignInWtihGoogle())
        }
    }

    if (!errors) {
        alert('Conta criada com sucesso!')
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
                            type = "text"
                            name = "nome"
                            id = "inpNome"
                            placeholder = "Insira aqui seu nome"
                            onChange = {handleInput}
                        />
                    </div>
                    {errors.nome && <span className = "errors">{errors.nome}</span>}
                    <div className = "input-label-cont">
                        <input
                            autoFocus
                            type = "email"
                            name = "email"
                            id = "inpEmail"
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
                                id = "inpSenha"
                                placeholder = "Insira aqui sua senha"
                                onChange = {handleInput}
                            />
                            <div className = "eye-cont">
                                <img
                                    src = {mostrarSenha ? eye_icon : eye_slash_icon}
                                    className = "icons"
                                    onClick = {() => handleSenha(false)}
                                    aria-label = {mostrarSenha ? "Hide password" : "Show password"}
                                    role = "button"
                                    alt = ""
                                ></img>
                            </div>
                        </div>
                    </div>
                    {errors.senha && <span className = "errors">{errors.senha}</span>}
                    <div className = "input-label-cont">
                        <div className = "input-cont">
                            <input
                                type = {mostrarConfirmarSenha ? "text" : "password"}
                                name = "confirmacao"
                                id = "inpConfirmacao"
                                placeholder = "Confirme a sua senha"
                                onChange = {handleInput}
                            />
                            <div className = "eye-cont">
                                <img
                                    src = {mostrarConfirmarSenha ? eye_icon : eye_slash_icon}
                                    className = "icons"
                                    onClick = {() => handleSenha(true)}
                                    aria-label = {mostrarConfirmarSenha ? "Hide password" : "Show password"}
                                    role = "button"
                                    alt = ""
                                ></img>
                            </div>
                        </div>
                    </div>
                    {errors.confirmacao && <span className = "errors">{errors.confirmacao}</span>}
                    <div className = "btn-cont-auth">
                        <button className = "btns laranja" id = "btnCriarConta" type = "submit">CRIAR CONTA</button>
                    </div>

                    <div className = "separador"> {/* -------------- OU -------------- */}
                        <span>OU</span>
                    </div>
                    
                    <div className = "btn-cont-auth">
                        <button className = "btns btn-alternative" id = "btnGoogle" onClick = {SignInWitGoogle}>
                            {isSigningIn ? (
                            <>
                                <img className = "icons google-icon" src = {google_icon} alt = "" />
                                GOOGLE
                            </>
                            ) : (
                            <>
                                CRIANDO CONTA...
                            </>
                            )}
                        </button>
                        <Link className = "btns azul-claro" to = "/login">ENTRAR</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn