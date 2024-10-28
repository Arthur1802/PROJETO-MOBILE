import { Link, Navigate } from 'react-router-dom'
import lg_logo from '../../assets/logo/lg_logo_light.svg'
import { isLoggedIn } from '../../utils/authentication/auth'
import './Welcome.css'

const Welcome = () => {
    const userLoggedIn = isLoggedIn()

    return (
        <div>
            {userLoggedIn && (<Navigate to = "/main" replace = {true}/>)}
            <div className = "welcome-panel" data-aos = "fade-up">
                <div className = "img-cont">
                    <img className = "welcome-logo" src = {lg_logo} alt = "Logo"></img>
                </div>
                <div className = "btn-cont">
                    <Link className = "btnsWelcome azul-claro poppins-semibold" id = "btnLogin" to = "/login">ENTRAR</Link>
                    <Link className = "btnsWelcome laranja poppins-semibold" id = "btnCriarConta" to = "/signin">CRIAR CONTA</Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome