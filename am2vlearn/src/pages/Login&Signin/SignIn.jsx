import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Signin, SigninWithGoogle } from '../../utils/authentication/auth.js'
import logoLight from '../../assets/logo/sm_logo_light.svg'
import logoDark from '../../assets/logo/sm_logo_dark.svg'
import google_icon from '../../assets/icons/google-icon.svg'
import eye_icon from '../../assets/icons/eye-icon.svg'
import eye_slash_icon from '../../assets/icons/eye-slash-icon.svg'
import './LogIn&SignIn.css'
import BackBtn from '../../components/BackBtn/BackBtn.jsx'
import { Notify } from '../../components/Notifications/Notify.js'
import NotificationContainer from '../../components/Notifications/NotificationContainer.jsx'

const SignIn = () => {
    const navigate = useNavigate()

    const theme = localStorage.getItem('theme')

    const logo = theme === 'dark' ? logoDark : logoLight

    const [values, setValues] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmacao: ''
    })

    const [isSigningIn, setIsSigningIn] = useState(false)

    const [notifications, setNotifications] = useState({})

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

        if (!values.nome || !values.email || !values.senha || !values.confirmacao) {
            setNotifications({
                errors: {
                    nome: !values.nome ? 'Nome é obrigatório' : '',
                    email: !values.email ? 'Email é obrigatório' : '',
                    senha: !values.senha ? 'Senha é obrigatória' : '',
                    confirmacao: !values.confirmacao ? 'Confirmação de senha é obrigatória' : ''
                }
            })

            return
        }

        setIsSigningIn(true)
        const result = await Signin(values.nome, values.email, values.senha)
        setNotifications(result)
    }

    const SignInWitGoogle = async (e) => {
        e.preventDefault()

        if (!isSigningIn) {
            setIsSigningIn(true)
            const results = await SigninWithGoogle()
            setNotifications(results)
            setIsSigningIn(false)
        }
    }

    useEffect(() => {
        console.log("Notifications:", notifications)
        if (notifications.errors) {
            const errorMessages = []
    
            if (notifications.errors.email) errorMessages.push(notifications.errors.email)
            if (notifications.errors.senha) errorMessages.push(notifications.errors.senha)
            if (notifications.errors.login) errorMessages.push(notifications.errors.login)
            if (notifications.errors.signinWithGoogle) errorMessages.push(notifications.errors.signinWithGoogle)
    
            if (errorMessages.length > 0) {
                Notify(`Erro ao criar conta!\n${errorMessages.join('\n')}`, 'error', 5000, true)
            }
        } else if (notifications.success) {
            Notify('Conta criada com sucesso!', 'success', 5000, true)
            setIsSigningIn(false)
            navigate('/login')
        }
    }, [notifications, navigate])    

    return (
        <div className = "auth-panel" data-aos = "fade-up">
            <NotificationContainer
                autoClose = {5000}
                hideProgressBar = {true}
            />
            <BackBtn />
            <div className = "img-cont">
                <img className = "login-logo" src = {logo} alt = "Logo"></img>
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
                <div className = "btn-cont-auth">
                    <button className = "btns laranja" id = "btnCriarConta" type = "submit">
                        {isSigningIn ? (
                        <>
                            CRIANDO CONTA...
                        </>
                        ) : (
                        <>
                            CRIAR CONTA
                        </>
                        )}
                    </button>
                </div>

                <div className = "separador"> {/* -------------- OU -------------- */}
                    <span>OU</span>
                </div>
                
                <div className = "btn-cont-auth">
                    <button className = "btns btn-alternative" id = "btnGoogle" onClick = {SignInWitGoogle}>
                        {isSigningIn ? (
                        <>
                            CRIANDO CONTA...
                        </>
                        ) : (
                        <>
                            <img className = "icons google-icon" src = {google_icon} alt = "" />
                            GOOGLE
                        </>
                        )}
                    </button>
                    <Link className = "btns azul-claro" to = "/login">ENTRAR</Link>
                </div>
            </form>
        </div>
    )
}

export default SignIn