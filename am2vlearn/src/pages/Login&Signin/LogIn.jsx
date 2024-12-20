import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Login, LoginWithGoogle } from '../../utils/authentication/auth.js'
import logoLight from '../../assets/logo/sm_logo_light.svg'
import logoDark from '../../assets/logo/sm_logo_dark.svg'
import google_icon from '../../assets/icons/google-icon.svg'
import eye_icon from '../../assets/icons/eye-icon.svg'
import eye_slash_icon from '../../assets/icons/eye-slash-icon.svg'
import './LogIn&SignIn.css'
import BackBtn from '../../components/BackBtn/BackBtn.jsx'
import { ToastContainer, toast, Slide } from 'react-toastify'

const LogIn = () => {
    const navigate = useNavigate()

    const theme = localStorage.getItem('theme')

    const logo = theme === 'dark' ? logoDark : logoLight

    const [values, setValues] = useState({
        email: '',
        senha: ''
    })

    const [isLoggingIn, setIsLoggingIn] = useState(false)

    const [notifications, setNotifications] = useState({})

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
            setNotifications({
                errors: {
                    email: !values.email ? 'Email é obrigatório' : '',
                    senha: !values.senha ? 'Senha é obrigatória' : '' 
                }
            })

            return
        }
        
        setIsLoggingIn(true)
        const result = await Login(values.email, values.senha)
        setNotifications(result)
        setIsLoggingIn(false)
    }

    const LogInWithGoogle = async (e) => {
        e.preventDefault()

        if (!isLoggingIn) {
            setIsLoggingIn(true)
            const result = await LoginWithGoogle()
            setNotifications(result)
            setIsLoggingIn(false)
        }
    }

    useEffect(() => {
        if (notifications.errors) {
            const errorMessages = []
    
            if (notifications.errors.email) errorMessages.push(notifications.errors.email)
            if (notifications.errors.senha) errorMessages.push(notifications.errors.senha)
            if (notifications.errors.login) errorMessages.push(notifications.errors.login)
            if (notifications.errors.loginWithGoogle) errorMessages.push(notifications.errors.loginWithGoogle)
    
            if (errorMessages.length > 0) {
                notify(`Erro ao efetuar login!\n${errorMessages.join('\n')}`, 'error')
            }
        } else if (notifications.success) {
            notify('Login efetuado com sucesso!', 'success')
            setIsLoggingIn(false)
            setTimeout(() => {
                navigate('/main')
            }, 5000)
        }
    }, [notifications, navigate])    

    const notify = (message, type) => {
        toast[type](message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide
        })
    }

    return (
        <div className = "auth-panel" data-aos = "fade-up">
            <BackBtn link = {'/'}/>
            <div className = "img-cont">
                <img className = "login-logo" src = {logo} alt = "Logo"></img>
            </div>
            <form className = "form" onSubmit = {onSubmit}>
                <div className = "input-label-cont">
                    <input
                        autoFocus
                        type = "email"
                        name = "email"
                        placeholder = "Insira aqui seu e-mail"
                        onChange = {handleInput}
                    />
                </div>
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
                <div className = "btn-cont-auth">
                    <button className = "btns azul-claro" id = "btnLogin" type = "submit">ENTRAR</button>
                </div>

                <div className = "separador">
                    <span>OU</span>
                </div>
                
                <div className = "btn-cont-auth">
                    <button className = "btns btn-alternative" id = "btnGoogle" onClick = {LogInWithGoogle}>
                        {isLoggingIn ? (
                        <>
                            FAZENDO LOGIN...
                        </>
                        ) : (
                        <>
                            <img className = "icons google-icon" src = {google_icon} alt = ""></img>
                            GOOGLE
                        </>
                        )}
                    </button>
                    <Link className = "btns laranja" to = "/signin">CRIAR CONTA</Link>
                </div>
            </form>

            <ToastContainer
                position = "top-center"
                autoClose = {5000}
                hideProgressBar
                newestOnTop = {false}
                closeOnClick = {false}
                rtl = {false}
                pauseOnFocusLoss = {false}
                draggable
                pauseOnHover
                theme = "dark"
                transition: Slide
            />
        </div>
    )
}

export default LogIn