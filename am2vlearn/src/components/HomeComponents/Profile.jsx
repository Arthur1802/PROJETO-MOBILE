import { useState } from "react"
import { getNome, getSobrenome, getEmail, getSenha } from '../../model/Usuario'

const Profile = () => {
    const [mostrarSenha, setMostrarSenha] = useState(false)

    const user_name = getNome()
    const user_sobrenome = getSobrenome()
    const user_email = getEmail()
    const user_senha = getSenha()

    return (
        <div className = "settings-section">
            <input type = "text" placeholder = "Redefinir nome" name = "user_name" value = {user_name} />
            <input type = "text" placeholder = "Redefinir sobrenome" name = "user_sobrenome" value = {user_sobrenome} />
            <input type = "email" placeholder = "Redefinir e-mail" name = "user_email" value = {user_email}/>
            <div className = "inp-senha-cont">
                <input type = "password" placeholder = "Redefinir senha" name = "user_senha" value = {user_senha}/>
                <button><i className = {`fa-solid ${mostrarSenha ? "fa-eye-slash" : "fa-eye"}`} onClick = {setMostrarSenha(!mostrarSenha)}></i></button>
            </div>
        </div>
    )
}

export default Profile