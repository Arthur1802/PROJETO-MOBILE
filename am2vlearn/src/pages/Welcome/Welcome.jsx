import { Link, Navigate } from 'react-router-dom'
import logoLight from '../../assets/logo/lg_logo_light.svg'
import logoDark from '../../assets/logo/lg_logo_dark.svg'
import { isLoggedIn } from '../../utils/authentication/auth'
import './Welcome.css'

const Welcome = () => {
    const userLoggedIn = isLoggedIn()
    const theme = localStorage.getItem('theme')
    const logo = theme === 'light' ? logoLight : logoDark

    return (
        <div className = "welcome-panel" data-aos = "fade-up">
            {userLoggedIn && (<Navigate to = "/main" replace = {true}/>)}
            <div className = "img-cont">
                <img className = "welcome-logo" src = {logo} alt = "Logo"></img>
            </div>
            <div className = "btn-cont">
                <Link className = "btnsWelcome azul-claro poppins-semibold" id = "btnLogin" to = "/login">ENTRAR</Link>
                <Link className = "btnsWelcome laranja poppins-semibold" id = "btnCriarConta" to = "/signin">CRIAR CONTA</Link>
            </div>
        </div>
    )
}

export default Welcome